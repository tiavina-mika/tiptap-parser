# tiptap-code-parser

<p  align="center">

<b>tiptap-code-parser</b>: HTML parser to React component built on the top of  <a href="https://www.npmjs.com/package/html-react-parser">html-react-parser</a> with code syntax highlighting.

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

Try it yourself in this **[CodeSandbox live demo](https://codesandbox.io/p/github/tiavina-mika/tiptap-code-parser-demo)**

<img alt="Screenshot" src="https://github.com/tiavina-mika/mui-tiptap-editor/blob/main/screenshots/screenshot.png" />

## Installation

```shell

npm  install  html-code-editor

```
or
```shell

yarn  add  html-code-editor


## Get started

#### Simple usage

```tsx
import parseHtml from 'html-code-editor';

const html = `<p><h1>Hello there</h1><code>console.log("Using it as a component")</code></p>`;

function App() {
  return (
    <div>
      {parseHtml(html)}
    </div>
  );
}
```

#### Using as a component
```tsx
import { HtmlCodeParser } from '../Parse'

const html = `<p><h1>Hello there</h1><code>console.log("Using it as a component")</code></p>`;

const App = () => {
  return (
    <HtmlCodeParser language="typescript" codeContainerClassName="custom-class">
      {html}
    </HtmlCodeParser>
  )
}
```


## Language

<p>By default it's use <code>Javascript</code></p>

```tsx
  parseHtml(html, { language: 'php' })
```
```tsx
  <HtmlCodeParser language="php">
    {html}
  </HtmlCodeParser>
```

## Customization
```tsx
  parseHtml(html, { codeContainerClassName: 'bg-gray-300' })
```
```tsx
  <HtmlCodeParser codeContainerClassName="bg-gray-300">
    {html}
  </HtmlCodeParser>
```


## Props

|props |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|children|`string[]`| empty | html string
|codeContainerClassName|`string`|empty| styles of the code container
|language|`string`|empty| language of the code ((see the list)[https://github.com/wooorm/lowlight?tab=readme-ov-file#data])

## Contributing

Get started [here](https://github.com/tiavina-mika/tiptap-code-parser/blob/main/CONTRIBUTING.md).
