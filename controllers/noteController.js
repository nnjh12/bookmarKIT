const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    db.Note
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
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
        await db.Tag.findOneAndUpdate({ tag: newNote.tag[i] }, { $addToSet: { note: newNote._id } }, {
          new: true,
          upsert: true
        })
      }
    } catch (err) {
      return res.status(422).json(err)
    }
  },
  update: (req, res) => {
    db.Note
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: async (req, res) => {
    try {
      const deleteNote = await db.Note.findOneAndDelete({ _id: req.params.id })
      await res.json(deleteNote)
      await db.Tag.updateMany({ note: { $in: [req.params.id] } }, { $pullAll: { note: [req.params.id] } })
      await db.Tag.remove({ note: { $exists: true, $size: 0 } })
    } catch (err) {
      return res.status(422).json(err)
    }
  },
  // filter: function (req, res) {
  //   console.log(req.query)
  //   db.Note
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findAllTag: (req, res) => {
    db.Tag
      .find(req.query)
      .sort({ tag: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTag: (req, res) => {
    db.Tag
      .find(req.query)
      .populate("note")
      .sort({ tag: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeTag: async (req, res) => {
    try {
      const updateNote = await db.Note.updateOne({ _id: req.params.id }, { $pullAll: { tag: [req.params.tag] } })
      await res.json(updateNote)
      await db.Tag.updateOne({ tag: req.params.tag }, { $pullAll: { note: [req.params.id] } })
      await db.Tag.remove({ note: { $exists: true, $size: 0 } })
    } catch (err) {
      return res.status(422).json(err)
    }
  },
  addTag: async (req, res) => {
    console.log(`add tag back end: ${req.body}`)

    try {
      const updatedNote = await db.Note
        .updateOne(
          { _id: req.params.id },
          {
            $addToSet: {
              tag: {
                $each: req.body,
              }
            }
          }
        )
      await res.json(updatedNote)

      for (var i = 0; i < req.body.length; i++) {
        await db.Tag.findOneAndUpdate({ tag: req.body[i] }, { $addToSet: { note: req.params.id } }, {
          new: true,
          upsert: true
        })
      }
    } catch (err) {
      return res.status(422).json(err)
    }
  }
};
