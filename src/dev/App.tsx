import parseHtml, { HtmlCodeParser } from '../Parse'
import { parse as nodeParse } from 'node-html-parser';

// const html = `
// <h1>Here is an exemple of code</h1>
// <p>This is a stringified html with code</p>
// <br/>
// <pre>
// <code>
// const App = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   const handleOpen = () => setOpen(!open);

//   return (
//     <div className="bg-error">
//       {parseHtml(html, { language: 'tsx' })}
//       <HtmlCodeParser language="tsx" codeContainerClassName="custom-class">
//         {html}
//       </HtmlCodeParser>
//       <button onClick={handleOpen}>
//         {open ? 'Close' : 'Open'}
//       </button>
//       </ br>
//     </div>
//   )
// }
// </code></pre>

// `;

const html = `
<h1>Here is an exemple of code</h1>
<p>This is a stringified html with code</p>
<br/>
<pre>
<code>
const App = () => {
  return (
    <div>
    <MyComponent className="cool />

    </div>

  )
}
</code></pre>

`;
// const root = nodeParse(html);
// console.log('root: ', root);
// console.log(root.getElementsByTagName('pre'));
// console.log('root: ', root);
// root.replaceWith((node) => {
//   console.log('node: ', node);
//   return node

// })

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

export default App;
