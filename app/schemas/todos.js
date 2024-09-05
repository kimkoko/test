const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    defaulte: Date.now,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
