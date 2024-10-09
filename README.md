# tiptap-parser

<p align="left">
 HTML parser for <a href="https://www.npmjs.com/package/mui-tiptap-editor">Tiptap editor</a> build on the of <a href="https://www.npmjs.com/package/html-react-parser">html-react-parser</a> with code syntax highlighting.
</p>

<!-- [START BADGES] -->
<!-- Please keep comment here to allow auto update -->
[![NPM Version](https://img.shields.io/npm/v/tiptap-parser?style=flat-square)](https://www.npmjs.com/package/tiptap-parser)
[![Language](https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org)
<!-- [END BADGES] -->

## Use case
The Tiptap editor is primarily used as a text editor for blogging, particularly in back-office applications. However, if the goal is simply to display content (for example, on a Next.js website), it may be excessive to install either the <a href="https://tiptap.dev/">Tiptap</a> or <a href="https://www.npmjs.com/package/mui-tiptap-editor">the mui-tiptap-editor</a> along with the entire MUI library.

This library is specifically designed to display the contents of the mui-tiptap-editor, which saves HTML as text. If you're using a developer-oriented blogging platform like Medium, this library is ideal for you.

## Demo
Try it yourself in this **[CodeSandbox live demo](https://codesandbox.io/p/github/tiavina-mika/tiptap-parser-demo)**

<img alt="Screenshot" src="https://github.com/tiavina-mika/tiptap-parser/blob/main/screenshots/screenshot.png" />

## Installation

```shell

npm install tiptap-parser

```
or
```shell

yarn add tiptap-parser
```


## Get started

#### Simple usage

```tsx
import TiptapParser from "tiptap-parser";

const html = `<h1>Hello world</h1>`;

function App() {
  return (
    <TiptapParser content={html} />
  );
}
```

#### Content with code

```tsx
const html = `<><h1>Hello there</h1><pre><code>console.log("Log something here")</code></pre></>`;

<TiptapParser content={html} language="typescript" />
```

#### Customization

```tsx
const html = `<p><h1>Hello there</h1></p>`;

<TiptapParser
  containerClassName="bg-gray-100"
  classNames={{
    codeClassName: 'p-6',
    h1ClassName: 'text-xl',
    aClassName: 'underline',
    pClassName: 'text-gray-400'
  }}
  content={html}
/>
```

## Props

|props |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|content|`string`|empty| html string to be displayed
|containerClassName|`string`|empty| styles of the container
|classNames|`ClassNameProps`|empty| class names of each element withing the container
|language|`string`|javascript| language of the code. [see the list](https://github.com/wooorm/lowlight?tab=readme-ov-file#data)

## Types

|props |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|codeClassName|`string`|empty| class name of code element
|h1ClassName|`string`|empty| class name of h1 element
|h2ClassName|`string`|empty| class name of h2 element
|h3ClassName|`string`|empty| class name of h3 element
|h4ClassName|`string`|empty| class name of h4 element
|h5ClassName|`string`|empty| class name of h5 element
|h6ClassName|`string`|empty| class name of h6 element
|pClassName|`string`|empty| class name of p element
|ulClassName|`string`|empty| class name of ul element
|spanClassName|`string`|empty| class name of span element
|divClassName|`string`|empty| class name of div element
|aClassName|`string`|empty| class name of a element
|tableClassName|`string`|empty| class name of table element
|imageClassName|`string`|empty| class name of image element
|other props|`HTMLReactParserOptions`|empty| [all html-react-parser props](https://www.npmjs.com/package/html-react-parser)


## Contributing

Get started [here](https://github.com/tiavina-mika/tiptap-parser/blob/main/CONTRIBUTING.md).
