/*
Markdown Previewer; Pseudocode:
HTML:
- Textarea; #editor + font awesome fCC logo
- Div; #previewer + font awesome fCC logo
- Maximize/minimize button


In #textarea, include: 
i. a heading element (H1 size), 
ii. a sub heading element (H2 size), 
iii. a link, 
iv. inline code, 
v. a code block, 
vi. a list item, 
vii. a blockquote, 
viii. an image, and 
ix. bolded text.

Javascript: (Yes, React-Redux)
- Funtion to link #editor & #previewer; content in #editor is updated in #previewer
- Import markdown library for content to render as HTML (https://cdnjs.com/libraries/marked)
- Method to handleChange() maximize and minimize buttons onClick.

CSS:
Color Gradients;same color different intensities.
i. #editor #previewer tabs
ii. content box
iii. background
iv. code backgrounds #fff
*/

import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as marked from "https://cdnjs.com/libraries/marked";


const defaultContent =  "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

/*
const initialMarkdown = `

# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, `<div></div>`, between 2 backticks.

```
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '```' && lastLine == '```') {
          return multiLineCode;
        }
  }
```

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
       - With different indentation levels.
               - That look like this.
               
               
               1. And there are numbered lists too.
               1. Use just 1s if you want!
               1. And last but not least, let's not forget embedded images:
               
               ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
*/

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => (
  <textarea id="editor" value={content} onChange={handleTextareaChange} />
);

const Previewer = ({ content }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}
  />
);

const App = () => {
  const [content, setContent] = React.useState(defaultContent);

  const handleTextareaChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
