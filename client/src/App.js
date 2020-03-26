import React, { Component } from "react";
import "./App.css";
import API from "./utils/api";

import { Col, Row, Container } from "./components/Grid";
import Logo from "./components/Logo"
import InputNote from "./components/InputNote";
import SearchBar from "./components/SearchBar";
import TagList from "./components/TagList";
import ViewNote from "./components/ViewNote";
import NoteContainer from "./components/NoteContainer";
import TagButton from "./components/TagButton";
import SortField from "./components/SortField";

import AddTag from "./components/AddTag";
import AddTagInput from "./components/AddTagInput";

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

  // handleFilter = (search1, search2) => {
  //   this.setState({ search1: search1, search2: search2 }, (filteredNote) => {
  //     filteredNote = this.state.allNote.filter(ele => this.testByInput(ele, this.state.search1) && this.testByButton(ele, this.state.search2))
  //     this.setState({ filteredNote }, () => this.filterTag(this.state.filteredNote))
  //   })
  // };

  handleFilter = (search1, search2) => {
    let filteredNote = this.state.allNote.filter(ele => this.testByInput(ele, search1) && this.testByButton(ele, search2))
    this.setState({ filteredNote }, () => this.filterTag(this.state.filteredNote))
  };

  recieveSearch1 = (search1) => {
    this.setState({ search1 }, () => this.handleFilter(this.state.search1, this.state.search2))
  }

  recieveSearch2 = (search2) => {
    this.setState({ search2 }, () => this.handleFilter(this.state.search1, this.state.search2))
  }

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
      <Container fluid>
        <Row>
          <Col size="md-2">
            <Logo></Logo>
          </Col>
          <Col size="md-10">
            <SearchBar
              sendSearch1={this.recieveSearch1}
              serach2={this.state.search2}>
            </SearchBar>
            <SortField handleSort={this.sortNote}></SortField>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <TagList
              sendSearch2={this.recieveSearch2}
              allTag={this.state.allTag}
              filteredTag={this.state.filteredTag}
              search1={this.state.search1}>
            </TagList>
          </Col>
          <Col size="md-10">
            {this.state.filteredNote.map((ele, index) => (
              // <div className="viewNoteContainer" style={{ borderRadius: "15px", backgroundColor: "#DDFFF7" }} key={index}>
              <ViewNote key={index} deleteOnClick={() => this.deleteNote(ele._id)}>
                <NoteContainer
                  key={ele._id}
                  bookmark={ele.bookmark}
                  keyword={ele.keyword}
                  highlight={this.state.search1}
                  date={ele.date}
                  deleteOnClick={() => this.deleteNote(ele._id)}
                ></NoteContainer>

                <div className="tagContainer">
                  {ele.tag.sort().map((tagEle, index) => (
                    <TagButton
                      key={index}
                      text={tagEle}
                      search={this.state.search2}
                      highlight={this.state.search1.charAt(0) === "#" ? this.state.search1.substr(1) : this.state.search1}
                      deleteTag={() => this.deleteTag(ele._id, encodeURIComponent(tagEle))}>
                    </TagButton>))}
                  <AddTag
                    inputId={`input${ele._id}`}
                    callBackId={ele._id}
                    callback={this.addTag}
                    allTag={ele.tag}
                    userAllTag={this.state.allTag}>
                  </AddTag>


                  <div style={{ clear: 'both' }}></div>


                </div>

                {/* <AddTagInput
                  inputId={`input${ele._id}`}
                  callBackId={ele._id}
                  callback={this.addTag}
                  allTag={ele.tag}
                  userAllTag={this.state.allTag}>
                </AddTagInput> */}
              </ViewNote>

            ))}
          </Col>
        </Row>

        <InputNote onClick={this.postNote} userAllTag={this.state.allTag}></InputNote>





      </Container>

    );
  }
}

export default App;
