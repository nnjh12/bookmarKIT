import React, { Component } from "react";
import "./App.css";

import InputNote from "./components/InputNote";
import ViewNote from "./components/ViewNote";

class App extends Component {
  render() {
    return (
      <div className="container">
        <InputNote></InputNote>
        <ViewNote></ViewNote>

      </div>
    );
  }
}

export default App;
