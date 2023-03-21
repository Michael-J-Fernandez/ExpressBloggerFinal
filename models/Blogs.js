const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  categories: [String],
  id: {
    type: String,
    default: uuidv4,
  }
}, { timestamps: true, strictQuery: true });

// register model to collection
const Blog = mongoose.model("sample_blogs", blogSchema);

// make our model accessible to outside files 
module.exports = Blog;