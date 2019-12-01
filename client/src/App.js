import React, { Component } from "react";
import "./App.css";
import API from "./utils/api";


import InputNote from "./components/InputNote";
import SearchBar from "./components/SearchBar";

import ViewNote from "./components/ViewNote";
import TagButton from "./components/TagButton";
import PlusIcon from "./components/PlusIcon";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allNote: [],
      filteredNote: [],
      search: ""
    };
  }

  componentDidMount() {
    this.loadNote();
  }

  loadNote = () => {
    API.getAllNote()
      .then(res =>
        this.setState({ allNote: res.data, filteredNote: res.data }, () => {
          console.log(this.state)
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
        this.filterNote(this.state.search)
      })
      .catch(err => console.log(err));
  };

  deleteNote = (id) => {
    console.log("Delete")
    API.deleteNote(id)
      .then(this.loadNote)
      .catch(err => console.log(err));
  };

  filterNote = (search) => {
    const testNote = (str, key) => {
      return str.toLowerCase().indexOf(key) > -1
    }
    const testTag = (arr, key) => {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().indexOf(key) > -1) {
          return true;
        }
      }
    }

    this.setState({ search: search.toLowerCase() }, () => {
      const filteredNote = this.state.allNote.filter(ele => testNote(ele.note, this.state.search) || testTag(ele.tag, this.state.search))
      this.setState({ filteredNote: filteredNote })
    })
  }

  deleteTag = (id, tag) => {
    console.log(id)
    console.log(tag)
    API.deleteTag(id, tag)
      .then(this.loadNote)
      .catch(err => console.log(err));
  }

  addTag = (id, newTag) => {
    console.log("App.js addTag")
    API.addTag(id, newTag)
      .then(response => {
        console.log(response.data);
        this.loadNote()
      })
      // .then(this.loadNote)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <InputNote onClick={this.postNote}></InputNote>
        <SearchBar filterNote={this.filterNote}></SearchBar>



        {this.state.filteredNote.map((ele, index) => (
          <div className="viewNoteContainer" key={index}>
            <ViewNote
              key={ele._id}
              note={ele.note}
              date={ele.date}
              deleteOnClick={() => this.deleteNote(ele._id)}
            ></ViewNote>

            {ele.tag.sort().map((tagEle, index) => (
              <TagButton
                key={index}
                deleteTag={() => this.deleteTag(ele._id, encodeURIComponent(tagEle))}>
                {tagEle}</TagButton>))}

            <PlusIcon callBackId={ele._id} callback={this.addTag}></PlusIcon>
          </div>
        ))}


      </div>
    );
  }
}

export default App;
