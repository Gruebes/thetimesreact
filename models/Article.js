var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  isSaved: {
    type: Boolean,
    default: false
  },
  savedDate: {
    type: Date,
    default: Date.now
  }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;