import React, { Component } from "react";
import "./App.css";
import API from "./utils/api";


import InputNote from "./components/InputNote";
import ViewNote from "./components/ViewNote";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allNote: [],
      filteredNote: []
    };
  }

  componentDidMount() {
    this.loadNote();
  }

  loadNote = () => {
    API.getAllNote()
      .then(res =>
        this.setState({ allNote: res.data }, () => {
          console.log(this.state.allNote)
        })
      )
      .catch(err => console.log(err));
  };

  postNote = (newNote) => {
    console.log(newNote)
    API.saveNote(newNote)
      .then(res => {
        console.log("just saved")
        this.setState({ allNote: [...this.state.allNote, res.data] }, () => console.log(this.state.allNote))
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <InputNote onClick={this.postNote}></InputNote>
        <ViewNote allNote={this.state.allNote}></ViewNote>
        
        {/* {this.state.allNote.map((ele, index) => (
          <ViewNote key={ele._id} note={ele.note} date={ele.date} tag={ele.tag}></ViewNote>
        ))}
 */}

      </div>
    );
  }
}

export default App;
