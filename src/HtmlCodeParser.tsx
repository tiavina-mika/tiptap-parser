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

import parseHtml, { HtmlCodeParserOptions } from "./Parse";

// ------------------------------ //
// ----- use it as component ---- //
// ------------------------------ //

export type HtmlCodeParserProps = {
  children: string;
} & HtmlCodeParserOptions;

const HtmlCodeParser = ({ codeContainerClassName, language, children }: HtmlCodeParserProps) => {
  return (
    <>
      {parseHtml(children, { codeContainerClassName, language })}
    </>
  )
}

export default HtmlCodeParser;
