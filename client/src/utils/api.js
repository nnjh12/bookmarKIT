import axios from "axios";
// import { func } from "prop-types";

export default {
  // Gets all note
  getAllNote: function () {
    return axios.get("/api/note");
  },
  // Gets the note with the given id
  getNote: function (id) {
    return axios.get("/api/note/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function (id) {
    return axios.delete("/api/note/" + id);
  },
  // Saves a note to the database
  saveNote: function (bookData) {
    return axios.post("/api/note", bookData);
  },
  // Gets all tag
  getAllTag: function () {
    return axios.get("/api/tag");
  },
  // Gets the tag with the given id
  getTag: function (id) {
    return axios.get("/api/tag/" + id);
  },
  // Delete one tag from note
  deleteTag: function (id, tag) {
    return axios.put("/api/tag/" + id + "/" + tag)
  },
  // Add tags to note
  addTag: function (id, data) {
    console.log("api addTag")
    console.log(id)
    console.log(data)
    return axios.put("/api/tag/" + id, data)
  }
};
