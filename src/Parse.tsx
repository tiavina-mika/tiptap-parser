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
import './index.css';
import parse, { HTMLReactParserOptions, DOMNode, Element, attributesToProps, domToReact } from 'html-react-parser';
import { common, createLowlight } from 'lowlight'
import { toHtml } from 'hast-util-to-html'
import html from 'htmlparser-to-html';
import { parse as nodeParse } from 'node-html-parser';
import { createHighlightPlugin } from 'prosemirror-highlight'
import { createParser } from 'prosemirror-highlight/lowlight'

const lowlight = createLowlight(common);

// const parseTest = (children) => {
//   console.log('children: ', children);
//   // console.log('children: ', children);
//   // const codeStr = domToReact(children as DOMNode[]) as string;
//   const str = children.map((child) => {
//     // console.log('child: ', child);
//     if (child.children && child.children.length > 0) {
//       const str2 = child.children.map((child2) => {
//         if (child2.children && child2.children.length > 0) {
//           return `<${child2.name}>${child2.children.map((child3) => child3.data).join('')}</${child2.name}>`
//         } else {
//           return child2.data || '';
//         }
//       })
//       return str2
//       // return `<${child.name}>${child.data}</${child.name}>`
//       // return `<${child.name}>${parseTest(child.children)}</${child.name}>`
//     } else {
//       return child.data || '';
//     }
//   })
//   // // console.log('codeStr: ', codeStr);
//   return str.join('');
// }
function formatItem(text, searchText){
  const search = new RegExp(searchText, 'iu')
  return text?.toString().replace(search, (m) => `${m}`)
}
const repl = (str1, str2) => {
  if (str1 === str2.toLowerCase()) {
    return str2;
  }

  return str1;
}
// const ex = '<h1>cool</h1><HtmlCodeParser></HtmlCodeParser>language="tsx" />'
const ex = `
<h1>Here is an exemple of code</h1>
<p>This is a stringified html with code</p>
<br/>
<pre>
<code>
const App = () => {
  return (
    <div>
      {parseHtml(html, { language: 'tsx' })}
      <HtmlCodeParser language="tsx" codeContainerClassName="custom-class">
        {html}
      </HtmlCodeParser>
    </div>
  )
}
</code></pre>
`
const replaceStr2 = (text, search) => {
  const v = text.search(new RegExp(search, 'ig'))
  // let result = ex.slice(v - 1)
  const next = ex.substring(v);
  const spaceAfter = next.split(' ');
  // console.log('spaceAfter: ', spaceAfter);
  // if (spaceAfter.length > 1 && spaceAfter[1].length > 1) {
  //   const copy = [...spaceAfter];
  //   copy.shift();
  //   return spaceAfter[1]
  // }
  return next.split(/[\s\/>]+/)[0]
}

const isType = (arr) => {
  if (arr[1]) {
    return arr[1][0] === '(';
  }

  return false;
}
const replaceStr = (text, search) => {
  const v = text.search(new RegExp(search, 'ig'))
  const next = text.substring(v);
  const spaceAfter2 = next.split('>');
  console.log('spaceAfter2: ', spaceAfter2);
  // console.log('next: ', next);

  if (spaceAfter2.length > 0 && spaceAfter2[0].length > 1 && !isType(spaceAfter2)) {
    return  spaceAfter2[0];
  }

  return next.split(/[\s\/>]+/)[0]
}

// console.log(replaceStr2(ex, 'htmlcodeparser'));

// console.log('resul2t: ', next.substring(v, next.search(new RegExp('/\//', 'ig'))));
// console.log('result: ', next.substring(v, ex.search(new RegExp('/\s|\/|>/', 'ig'))));

// const format =

// const v = ex.match(new RegExp('htmlcodeparser'))
// console.log('v: ', formatItem(ex, 'htmlcodeparser'));

const parseTest = (children, mainText) => {
  // console.log('mainText: ', mainText);
  // console.log('children: ', children);
  // console.log('children: ', children);
  // const codeStr = domToReact(children as DOMNode[]) as string;
  const str = children.map((child) => {
    // console.log('child: ', child);
    if (child.children && child.children.length > 0) {
      // const str2 = child.children.map((child2) => {
      //   if (child2.children && child2.children.length > 0) {
      //     return `<${child2.name}>${child2.children.map((child3) => child3.data).join('')}</${child2.name}>`
      //   } else {
      //     return child2.data || '';
      //   }
      // })
      // console.log('child.children: ', child);
      // return str2
      // return `<${child.name}>${child.data}</${child.name}>`
      // const element = formatItem(mainText, child.data, child.name)
      // console.log('element: ', element);
      // console.log('v: ', v, '-', child.name);
      const start = replaceStr(mainText, child.name)
      const end = replaceStr(mainText, child.name).split(' ')[0];


      // console.log('element: ', element);

      return `<${start}>${parseTest(child.children, mainText)}</${end}>`
    } else {
      if (child.type === 'comment' && child.data.includes('br')) {
        console.log('child.name: ', child.name);
        return '</ br>';
      }
      return child.data || '';
    }
  })
  // // console.log('codeStr: ', codeStr);
  return str.join('');
}

// const getString = (htmlStr: string) => {
//   const root = nodeParse(htmlStr);
//   const codeStrs2 = html(root.getElementsByTagName('pre'));
//   const tree = lowlight.highlight('javascript', codeStrs2.replace(/<pre>|<\/pre>|<code>|<\/code>/ig, ''));
// }
// ------------------------------ //
// ---- use it as a function ---- //
// ------------------------------ //
const getOptions = (language: string, codeContainerClassName?: string, mainText?: string): HTMLReactParserOptions => {
  return {
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
    replace(domProps: DOMNode) {
      const { name, children, attribs } = domProps as Element;

      // replace only <code> elements
      if (name === 'code') {
      // console.log('domProps: ', domProps);

        // Convert DOM attributes to React props
        const props = attributesToProps(attribs);
        // console.log('toHtml(children): ',domProps);
        // Replace the element children
        const options = getOptions(language, codeContainerClassName);
        // const codeStr = domToReact(children as DOMNode[], options) as string;
        // console.log('codeStr: ', codeStr);
        // console.log('children: ', children);
        // console.log('children: ', children);

        const codeStrs = html(children);
        // console.log('codeStrs: ', codeStrs);
        // console.log('codeStrs2: ', codeStrs2);
        // const root = nodeParse(html);

        // console.log('children: ', children.map((child) => child.data).join(''));
        // console.log('codeStr: ', codeStr);

        const codeStr3  = parseTest(children, mainText)
        console.log('children: ', children);

        const tree = lowlight.highlight(language, codeStr3);
        // const tree = lowlight.highlight(language, children.map((child) => child.data).join(''));
        return (
          // editor container
          <code className={`hljs code-container ${codeContainerClassName || ''}`} {...props}>
            {parse(toHtml(tree))}
          </code>
        );
      }
    },
  }
};

export type HtmlCodeParserOptions = {
  /*
  *
  * Specify the programming language of the code snippet that
  * will be displayed in the `ReadOnlyTextCodeEditor` component. By default, the `language` prop is set to
  * `'jsx'`, but it can be overridden when using the component by passing a different language value.
  *
  * for more language options, visit: https://github.com/wooorm/lowlight?tab=readme-ov-file#data
  */
  language?: string;
  codeContainerClassName?: string;
};

const parseHtml = (
  /**
   * The stringified html to be parsed (to HTML).
   * example: `<p><h1>Hello there</h1><code>console.log('Hello, World!')</code></p>`
   */
  text: string,
  options?: HtmlCodeParserOptions
) => {
  const { codeContainerClassName, language = 'javascript' } = options || {};

  /*
  * If the `<code>` tag is not found in the html string content
  * it means that there are no code snippets to be highlighted.
  */
  if (!text.includes('<code>')) {
    return parse(text);
  };

  /**
   * Parse the html string content and highlight the code snippets
   */
  return parse(text, getOptions(language, codeContainerClassName, text));
}

// ------------------------------ //
// ----- use it as component ---- //
// ------------------------------ //
type Props = {
  children: string;
} & HtmlCodeParserOptions;

export const HtmlCodeParser = ({ codeContainerClassName, language, children }: Props) => {
  return parseHtml(children, { codeContainerClassName, language })
}

export default parseHtml;
