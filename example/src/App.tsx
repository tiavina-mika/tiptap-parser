import { parseHtml, HtmlCodeParser } from "tiptap-parser";

// const html = `<p><h1>Hello there</h1><code>console.log("Using it as a component")</code></p>`;
const html = `
<h1>Here is an exemple of code</h1>
<p>This is a stringified html with code</p>
<br/>
<pre><code>import Link from 'next/link';import { primaryFont } from '@/components/fonts';import Title from '@/components/typography/Title';// exemple de commentaireconst NotFound = () =&gt; (  &lt;html lang="en"&gt;    &lt;body className="antialiased dark:bg-neutral-900"&gt;      &lt;div className="flex min-h-screen flex-col items-center justify-center space-y-8"&gt;        &lt;Title className="text-4xl font-semibold"&gt;404 - Page Not Found&lt;/Title&gt;        &lt;div className="space-x-4"&gt;          &lt;Link            className="text-blue-600 underline duration-300 hover:text-red-500"            href="/"          &gt;            Homepage          &lt;/Link&gt;          &lt;Link            className="text-blue-600 underline duration-300 hover:text-red-500"            href="/contact"          &gt;            Contact Us          &lt;/Link&gt;        &lt;/div&gt;      &lt;/div&gt;    &lt;/body&gt;  &lt;/html&gt;);export default NotFound;</code></pre><p></p>

`;

const App = () => {
  return (
    <div>
      {parseHtml(html)}
      <HtmlCodeParser
        language="typescript"
        codeContainerClassName="custom-class"
      >
        {html}
      </HtmlCodeParser>
    </div>
  );
};

export default App;
