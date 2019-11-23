import axios from "axios";
// import { func } from "prop-types";

export default {
  // Gets all note
  getAllNote: function () {
    return axios.get("/api/note");
  },
  // Gets the book with the given id
  getNote: function (id) {
    return axios.get("/api/note/" + id);
  },
  // Deletes the book with the given id
  deleteNote: function (id) {
    return axios.delete("/api/note/" + id);
  },
  // Saves a book to the database
  saveNote: function (bookData) {
    return axios.post("/api/note", bookData);
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
