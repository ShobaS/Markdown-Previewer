import React, { Component } from "react";
import ReactDOM from "react-dom";
import marked from "marked";
import "./index.css";

class MarkdownViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown : ''
    }
  }
  handleChange(event) {
    this.setState({markdown: marked.parse(event.target.value)})
  }

  render() {
    const { markdown } = this.state;
    return (
      <div>
        <textarea rows ="20" cols ="50" className ="data" placeholder="Enter the text" onChange={this.handleChange.bind(this)}></textarea> 
        <p className ="markdown" dangerouslySetInnerHTML={{__html: markdown}}></p>
      </div>
    )
  }
}

ReactDOM.render(<MarkdownViewer  />, document.getElementById('root'))
