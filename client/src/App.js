import React, { Component } from "react";
import "./App.css";
import API from "./utils/api";


import InputNote from "./components/InputNote";
import ViewNote from "./components/ViewNote";
import TagButton from "./components/TagButton";
import PlusIcon from "./components/PlusIcon";

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
        this.setState({ allNote: [res.data, ...this.state.allNote] }, () => console.log(this.state.allNote))
      })
      .catch(err => console.log(err));
  };

  deleteNote = (id) => {
    API.deleteNote(id)
      .then(this.loadNote)
      .catch(err => console.log(err));
  };

  deleteTag = (id, tag) => {
    console.log(id)
    console.log(tag)
    API.deleteTag(id, tag)
      .then(this.loadNote)
      .catch(err => console.log(err));
  }

  addTag = (id) => {
    console.log("App.js addTag")
    API.addTag(id, ["hello","array"])
      .then(response => {
        console.log(response.data);
      })
      // .then(this.loadNote)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <InputNote onClick={this.postNote}></InputNote>
        {/* <ViewNote allNote={this.state.allNote}></ViewNote> */}

        {this.state.allNote.map((ele, index) => (
          <div className="viewNoteContainer" key={index}>
            <ViewNote
              key={ele._id}
              note={ele.note}
              date={ele.date}
              deleteOnClick={() => this.deleteNote(ele._id)}
            ></ViewNote>

            {ele.tag.map((tagEle, index) => (
              <TagButton
                key={index}
                deleteTag={() => this.deleteTag(ele._id, encodeURIComponent(tagEle))}>
                {tagEle}</TagButton>))}

            <PlusIcon passingId={ele._id} callback={this.loadNote}></PlusIcon>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
