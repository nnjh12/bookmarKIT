import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import TextareaPage from "./components/TextareaPage"

class App extends Component {
  render() {
    return (
      <div className="container">
        <TextareaPage id="contentInput" rows="5">Memo</TextareaPage>
        <TextareaPage id="tagInput" rows="2">Tags</TextareaPage>

      </div>
    );
  }
}

export default App;
