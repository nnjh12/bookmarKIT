import React, { Component } from "react";
import "./App.css";

import TextareaPage from "./components/TextareaPage"
import TagButton from "./components/TagButton"

class App extends Component {
  render() {
    return (
      <div className="container">
        <TextareaPage id="contentInput" rows="5">Memo</TextareaPage>
        <TextareaPage id="tagInput" rows="2">Tags</TextareaPage>
        <TagButton></TagButton>

      </div>
    );
  }
}

export default App;
