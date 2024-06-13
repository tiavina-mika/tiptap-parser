/**
 *
 * documentations:
 * https://www.npmjs.com/package/html-react-parser
 * https://github.com/wooorm/lowlight?tab=readme-ov-file
 * https://github.com/GeoffSelby/tailwind-highlightjs
 * https://highlightjs.org/examples (list of all available themes)
 * https://medium.com/@hizacharylee/simplify-syntax-highlighting-with-highlight-js-b65af3bdc509 (custom css theme, not used here)
 *
 */
import parse, { HTMLReactParserOptions, DOMNode, Element, attributesToProps, domToReact } from 'html-react-parser';
import { common, createLowlight } from 'lowlight'
import { toHtml } from 'hast-util-to-html'
import { ElementType } from 'react';
import './index.css';

const lowlight = createLowlight(common);

export type ClassNamesProps = {
  codeClassName?: string;
  h1ClassName?: string;
  h2ClassName?: string;
  h3ClassName?: string;
  h4ClassName?: string;
  h5ClassName?: string;
  h6ClassName?: string;
  pClassName?: string;
  ulClassName?: string;
  liClassName?: string;
  spanClassName?: string;
  divClassName?: string;
  aClassName?: string;
  tableClassName?: string;
  imageClassName?: string;
};

const parseHtml = (
  /**
   * The stringified html to be parsed (to HTML).
   * example: `<p><h1>Hello there</h1><code>console.log('Hello, World!')</code></p>`
   */
  text: string,
  classNames?: ClassNamesProps,
  language = 'javascript',
  options?: HTMLReactParserOptions
) => {
  const { codeClassName } = classNames || {};
  /**
   * Parse the html string content and highlight the code snippets
   */

  const defaultOptions = {
    /**
     * Replace the `<code>` with the highlighted code snippet
     * the string content of the `<code>` tag is transformed to stringified html using the lowlight library
     * the stringified html is then highlighted using the `highlight` theme
     * for that to work with tailwindcss, we are use tailwindcss plugin `tailwind-highlightjs`
     * hast trees as returned by lowlight can be serialized to HTML using `hast-util-to-html`
     * finally the highlighted code snippet is parsed to react component using the `parse` function of `html-react-parser`
     * @param domProps
     * @returns
     */
    replace: (domProps: DOMNode) => {
      const { name, children, attribs } = domProps as Element;
      const Component = name as ElementType;

      if (name) {
        const props = attributesToProps(attribs);

        // do not replace the `<pre>` tag
        if (name === 'pre') return

        /**
         * Replace the `<code>` tag with the highlighted code snippet
         * with the `hljs` class name to apply the highlight theme (see: https://highlightjs.org/examples/)
         */
        if (name === 'code') {
          const codeStr = domToReact(children as DOMNode[]) as string;
          const tree = lowlight.highlight(language, codeStr);
          return (
            <code className={`hljs code-container ${codeClassName || ''}`} {...props}>
              {parse(toHtml(tree))}
            </code>
          );
        }

        if (name === 'image') {
          return <Component {...props} className={classNames?.imageClassName || ''} />;
        }

        if (['br', 'hr', 'img'].find((currentName: string) => currentName === name)) {
            return <Component {...props} />;
        }

        return (
          <Component className={(classNames as any)?.[`${name}ClassName`] || ''} {...props}>
            {domToReact(children as DOMNode[])}
          </Component>
        );
      }
    }
  };

  /*
  * If the `<code>` tag is not found in the html string content
  * it means that there are no code snippets to be highlighted.
  */
  return parse(text, { ...defaultOptions, ...options });
}

// ------------------------------ //
// ---------- main props -------- //
// ------------------------------ //
export type TiptapProps = {
  /**
   * the stringified html content to be parsed
   */
  content: string;
  /**
   * object that contains the class names for the html tags
   */
  classNames?: ClassNamesProps;
  /**
   * the programming language of the code snippets to be highlighted
   * default: `javascript`
   * see all available languages here: https://highlightjs.org/examples
   */
  language?: string;
  /**
   * the class name of the container div
   */
  containerClassName?: string;
  /**
   * HTMLReactParserOptions: the options of the `html-react-parser` library
   */
} & HTMLReactParserOptions;
const TiptapParser = ({ classNames, containerClassName, language, content, ...rest }: TiptapProps) => {
  return (
    <div className={containerClassName}>
      {parseHtml(content, classNames, language, rest)}
    </div>
  );
}

export default TiptapParser;
