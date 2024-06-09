import TiptapParser from "tiptap-parser";

const html = `
<h1>Here is an exemple of code</h1>
<p>This is a stringified html with code</p>
<br/>
<pre><code>import Link from 'next/link';

import Title from '@/components/typography/Title';

// some comment here

const NotFound = () =&gt; (
  &lt;html lang="en"&gt;
    &lt;body className=""&gt;
      &lt;div className="flex min-h-screen flex-col items-center justify-center space-y-8"&gt;
        &lt;Title className="text-4xl font-semibold"&gt;404 - Page Not Found&lt;/Title&gt;

        &lt;div className="space-x-4"&gt;
          &lt;Link
            className="text-blue-600 underline duration-300 hover:text-red-500"
            href="/"
          &gt;
            Homepage
          &lt;/Link&gt;
          &lt;Link
            className="text-blue-600 underline duration-300 hover:text-red-500"
            href="/contact"
          &gt;
            Contact Us
          &lt;/Link&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/body&gt;
  &lt;/html&gt;
);
export default NotFound;
</code></pre><p></p>
`;

const App = () => {
  return (
    <TiptapParser content={html} language="tsx" classNames={{ h1ClassName: 'h1'}} />
  );
};

export default App;
