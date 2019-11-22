import axios from "axios";

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
  deleteTag: function (id, tag) {
    return axios.put("/api/note/" + id + "/" + tag)
  }
};
