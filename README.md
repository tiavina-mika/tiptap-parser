# tiptap-parser

<p  align="center">

<b>tiptap-parser</b>: HTML parser to React component built on the top of  <a href="https://www.npmjs.com/package/html-react-parser">html-react-parser</a> with code syntax highlighting.

</p>


## Table of Contents

<details>

- [Installation](#installation)

- [Get started](#get-started)

- [Customization](#customization)

- [Props](#props)

- [Contributing](#contributing)

</details>

## Demo

Try it yourself in this **[CodeSandbox live demo](https://codesandbox.io/p/github/tiavina-mika/tiptap-parser-demo)**

<img alt="Screenshot" src="https://github.com/tiavina-mika/mui-tiptap-editor/blob/main/screenshots/screenshot.png" />

## Installation

```shell

npm  install  tiptap-parser

```
or
```shell

yarn  add  tiptap-parser
```


## Get started

#### Simple usage

```tsx
import TiptapParser from "tiptap-parser";

const html = `<h1>Hello world</h1>`;

function App() {
  return (
    <TiptapParser>
      {html}
    </TiptapParser>
  );
}
```

#### Content with code

```tsx
import TiptapParser from "tiptap-parser";

const html = `<><h1>Hello there</h1><code>console.log("Log something here")</code></>`;

function App() {
  return (
    <TiptapParser language="typescript">
      {html}
    </TiptapParser>
  );
}
```

#### Customization

```tsx
import { HtmlCodeParser } from '../Parse'

const html = `<p><h1>Hello there</h1></p>`;

const App = () => {
  return (
    <TiptapParser
      classNames={{
        codeClassName: 'p-6',
        h1ClassName: 'text-xl',
        aClassName: 'underline',
        pClassName: 'text-gray-400'
      }}
    />
      {html}
    </TiptapParser>
  )
}
```

## Props

|props |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|containerClassName|`string`|empty| styles of the container
|classNames|`ClassNameProps`|empty| class names of each element withing the container
|language|`string`|empty| language of the code. [see the list](https://github.com/wooorm/lowlight?tab=readme-ov-file#data)

### classNames Props
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

## Contributing

Get started [here](https://github.com/tiavina-mika/tiptap-parser/blob/main/CONTRIBUTING.md).
