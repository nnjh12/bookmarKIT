const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Note
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Note
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async (req, res) => {
    console.log("add new note")
    console.log(req.body)
    try {
      //1.create new documents in Note collection.
      const newNote = await db.Note.create(req.body)
      await res.json(newNote)

      //2.push note id in each tag's documents.
      for (var i = 0; i < newNote.tag.length; i++) {
        await db.Tag.findOneAndUpdate({ tag: newNote.tag[i] }, { $push: { note: newNote._id } }, {
          new: true,
          upsert: true
        })
      }
    } catch (err) {
      return res.status(422).json(err)
    }
  },
  update: function (req, res) {
    db.Note
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Note
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  filter: function (req, res) {
    console.log(req.query)
    db.Note
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTag: function (req, res) {
    db.Tag
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeTag: function (req, res) {
    db.Note
      .update({ _id: req.params.id }, { $pullAll: { tag: [req.params.tag] } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addTag: function (req, res) {
    console.log("add tag back end")
    console.log(req.body)
    db.Note
      .updateOne(
        { _id: req.params.id },
        {
          $push: {
            tag: {
              $each: req.body,
            }
          }
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
