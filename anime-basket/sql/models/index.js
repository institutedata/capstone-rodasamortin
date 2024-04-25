"use strict";
// import the models
const User = require("./user");
const Anime = require("./anime");
const Library = require("./library");
const AnimeLibrary = require("./animelibrary");
const Blog = require("./blog");
const Comment = require("./comment");

async function init() {
  // sync the models, this will create the tables if they don't exist
  await User.sync();
  await Anime.sync();
  await Library.sync();
  await AnimeLibrary.sync();
  await Blog.sync();
  await Comment.sync();
}

init();
module.exports = {
  User,
  Anime,
  Library,
  AnimeLibrary,
  Blog,
  Comment
};
 // export the model
// also export any extra models here};
