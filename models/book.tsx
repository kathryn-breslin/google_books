const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, unique: true, required: true },
    authors: [{ type: String, required: true }],
    description: String,
    image: String,
    link: { type: String, unique: true, required: true },
  });
  
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;