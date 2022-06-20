import React from 'react';
import './App.css';
import { marked } from 'marked';
const text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: text
    }
    this.change = this.change.bind(this);
  }
  change(e) {
    this.setState({ input: e.target.value });
  }
  render() {
    return (<div className='main'>
      <Editor input={this.state.input} change={this.change}></Editor>
      <Output input={this.state.input}></Output>
      <h3 id="auth"> Code Written by Lbringer/Aditya g(Only Intital Text Taken From Example)</h3>
    </div>)
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <textarea id="editor" onChange={this.props.change} value={this.props.input}></textarea>
    )
  }
}


class Output extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    let markdown = marked.parse(this.props.input);
    document.querySelector("#preview").innerHTML = markdown;
  }
  componentDidMount() {
    let markdown = marked.parse(this.props.input);
    document.querySelector("#preview").innerHTML = markdown;
  }
  render() {
    return (<div>
      <div id="preview"></div>
    </div>)
  }
}






export default App;
