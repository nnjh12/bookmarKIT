const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: { type: String, required: true, unique: true },
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ],
  date: { type: Date, default: Date.now }
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;