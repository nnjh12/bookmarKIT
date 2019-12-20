import React, { Component } from "react";
import "./App.css";
import API from "./utils/api";


import InputNote from "./components/InputNote";
import SearchBar from "./components/SearchBar";

import ViewNote from "./components/ViewNote";
import TagButton from "./components/TagButton";
import PlusIcon from "./components/PlusIcon";
import SortButton from "./components/SortButton";

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
        this.setState({ allNote: res.data }, () => {
          console.log(this.state)
          this.filterNote(this.state.search)
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

    this.setState({ search: search.toLowerCase() }, (filteredNote) => {
      if (this.state.search.charAt(0) === "#") {
        filteredNote = this.state.allNote.filter(ele => testTag(ele.tag, this.state.search.substr(1)))
      } else {
        filteredNote = this.state.allNote.filter(ele => testNote(ele.note, this.state.search) || testTag(ele.tag, this.state.search))
      }
      this.setState({ filteredNote: filteredNote })
    })
  }

  sortNote = (sortField, ascending) => {
    console.log("Sort Notes");

    const sortAlphabet = (a, b) => {
      var noteA = a.note.toLowerCase(); // ignore upper and lowercase
      var noteB = b.note.toLowerCase(); // ignore upper and lowercase
      if (noteA < noteB) {
        return -1;
      }
      if (noteA > noteB) {
        return 1;
      }
      // names must be equal
      return 0;
    }

    const sortDate = (a, b) => {
      var dateA = a.date; // ignore upper and lowercase
      var dateB = b.date; // ignore upper and lowercase
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      // names must be equal
      return 0;
    }


    let sortedNote;
    if (sortField === "alphabet") {
      if (ascending) {
        sortedNote = this.state.filteredNote.sort(sortAlphabet)
      } else {
        sortedNote = this.state.filteredNote.sort(sortAlphabet).reverse()
      }
    } else {
      if (ascending) {
        sortedNote = this.state.filteredNote.sort(sortDate)
      } else {
        sortedNote = this.state.filteredNote.sort(sortDate).reverse()
      }
    }

    this.setState({ filteredNote: sortedNote })

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
        <SortButton sortField="alphabet" handleSort={this.sortNote}></SortButton>
        <SortButton sortField="date" handleSort={this.sortNote}></SortButton>


        {this.state.filteredNote.map((ele, index) => (
          <div className="viewNoteContainer mb-4 p-4" style={{ borderRadius: "15px", backgroundColor: "#DDFFF7" }} key={index}>
            <ViewNote
              key={ele._id}
              text={ele.note}
              highlight={this.state.search}
              date={ele.date}
              deleteOnClick={() => this.deleteNote(ele._id)}
            ></ViewNote>

            <div className="tagContainer mb-3">
              {ele.tag.sort().map((tagEle, index) => (
                <TagButton
                  key={index}
                  text={tagEle}
                  highlight={this.state.search.charAt(0) === "#" ? this.state.search.substr(1) : this.state.search}
                  deleteTag={() => this.deleteTag(ele._id, encodeURIComponent(tagEle))}>
                </TagButton>))}
              <div style={{ clear: 'both' }}></div>

            </div>

            <PlusIcon callBackId={ele._id} callback={this.addTag}></PlusIcon>
          </div>
        ))}


      </div>
    );
  }
}

export default App;
