const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/note"
  , { useNewUrlParser: true, useUnifiedTopology: true }
);

const noteSeed = [
  {
    note: "Make an appointment for Dental office visit",
    tag: ["baby","personal","schedule","health"],
    date: new Date(Date.now())
  },
  {
    note: "https://www.udemy.com/course/complete-android-n-developer-course/?course_id=951618",
    tag: ["coding","work","android studio"],
    date: new Date(Date.now())
  },
];

db.Note
  .remove({})
  .then(() => db.Note.collection.insertMany(noteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });