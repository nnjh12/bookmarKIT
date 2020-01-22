import React, { Component } from "react";
import "./App.css";
import API from "./utils/api";

import InputNote from "./components/InputNote";
import SearchBar from "./components/SearchBar";
import ViewNote from "./components/ViewNote";
import TagButton from "./components/TagButton";
import PlusIcon from "./components/PlusIcon";
import SortField from "./components/SortField";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allNote: [],
      allTag: [],
      filteredNote: [],
      filteredTag: [],
      search1: "",
      search2: []
    };
  }

  componentDidMount() {
    this.loadNote();
  };

  loadNote = async () => {
    try {
      const allNote = await API.getAllNote();
      const allTag = await API.getAllTag();
      
      this.setState({ allNote: allNote.data, allTag: allTag.data }, () => {
        console.log(this.state)
        this.handleFilter(this.state.search1, this.state.search2)
      })
    } catch (err) {
      console.log(err)
    }
  };

  postNote = (newNote) => {
    // this.sortNote("date", false);
    console.log(newNote);
    API.saveNote(newNote)
      .then(res => {
        console.log("just saved")
        this.loadNote()
      })
      .catch(err => console.log(err));
  };

  deleteNote = (id) => {
    console.log("Delete")
    API.deleteNote(id)
      .then(this.loadNote)
      .catch(err => console.log(err));
  };

  testByInput = (note, input) => {
    const testKeyword = (str, key) => {
      return str.toLowerCase().indexOf(key) > -1;
    };
    const testTag = (arr, key) => {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().indexOf(key) > -1) {
          return true;
        }
      }
    };
    if (input === "") {
      return true;
    } else {
      if (input.charAt(0) === "#") {
        return testTag(note.tag, input.substr(1));
      } else {
        return testKeyword(note.keyword, input) || testTag(note.tag, input);
      }
    }
  };

  testByButton = (note, buttonArr) => {
    const testTagExactly = (arr, key) => {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
          return true;
        }
      }
    }
    if (buttonArr.length === 0) {
      return true;
    } else {
      return buttonArr.every(j => testTagExactly(note.tag, j));
    }
  };

  filterTag = (note) => {
    let filteredTag = [];
    for (let i = 0; i < note.length; i++) {
      for (let j = 0; j < note[i].tag.length; j++) {
        if (!filteredTag.includes(note[i].tag[j])) {
          filteredTag.push(note[i].tag[j])
        }
      }
    }
    this.setState({ filteredTag })
  };

  handleFilter = (search1, search2) => {
    this.setState({ search1: search1, search2: search2 }, (filteredNote) => {
      filteredNote = this.state.allNote.filter(ele => this.testByInput(ele, this.state.search1) && this.testByButton(ele, this.state.search2))
      this.setState({ filteredNote }, () => this.filterTag(this.state.filteredNote))
    })
  };

  sortNote = (sortField, ascending) => {
    const sortAlphabet = (a, b) => {
      var noteA = a.keyword.toLowerCase(); // ignore upper and lowercase
      var noteB = b.keyword.toLowerCase(); // ignore upper and lowercase
      if (noteA < noteB) {
        return -1;
      }
      if (noteA > noteB) {
        return 1;
      }
      // names must be equal
      return 0;
    };
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
    };
    let sortedNote;
    if (sortField === "alphabet") {
      if (ascending) {
        sortedNote = this.state.allNote.sort(sortAlphabet)
      } else {
        sortedNote = this.state.allNote.sort(sortAlphabet).reverse()
      }
    } else {
      if (ascending) {
        sortedNote = this.state.allNote.sort(sortDate)
      } else {
        sortedNote = this.state.allNote.sort(sortDate).reverse()
      }
    }
    this.setState({ allNote: sortedNote }, () => { this.handleFilter(this.state.search1, this.state.search2) })
  };

  deleteTag = (id, tag) => {
    API.deleteTag(id, tag)
      .then(this.loadNote)
      .catch(err => console.log(err));
  };

  addTag = (id, newTag) => {
    API.addTag(id, newTag)
      .then(response => {
        console.log(response.data)
        this.loadNote()
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <InputNote onClick={this.postNote}></InputNote>
        <SearchBar
          handleFilter={this.handleFilter}
          allTag={this.state.allTag}
          filteredTag={this.state.filteredTag}
          search={this.state.search2}>
        </SearchBar>

        <SortField handleSort={this.sortNote}></SortField>

        {this.state.filteredNote.map((ele, index) => (
          <div className="viewNoteContainer mb-4 p-4" style={{ borderRadius: "15px", backgroundColor: "#DDFFF7" }} key={index}>
            <ViewNote
              key={ele._id}
              bookmark={ele.bookmark}
              keyword={ele.keyword}
              highlight={this.state.search1}
              date={ele.date}
              deleteOnClick={() => this.deleteNote(ele._id)}
            ></ViewNote>

            <div className="tagContainer mb-3">
              {ele.tag.sort().map((tagEle, index) => (
                <TagButton
                  key={index}
                  text={tagEle}
                  search={this.state.search2}
                  highlight={this.state.search1.charAt(0) === "#" ? this.state.search1.substr(1) : this.state.search1}
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
