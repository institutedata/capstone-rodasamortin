"use strict";
const Blog = require("../models/blog");

// finds all libraries in DB, then sends array as response.
const getAllBlogs = (res) => {
  Blog.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createBlogPost = async (data, res) => {
  console.log("user_id is: ", data.user_id);
  console.log("title is: ", data.title);

  Blog.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getBlogPostByID = async (req, res) => {
  Blog.findOne({ where: { blog_id: req.params.blog_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateBlogPost = async (req, res) => {
  Blog.update(req.body, { where: { blog_id: req.params.blog_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getBlogPostsByUserID = async (req, res) => {
    Blog.findAll({ where: { user_id: req.params.user_id } })
        .then((data) => {
        res.send({ result: 200, data: data });
        })
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
    };

const deleteBlogPostByID = async (req, res) => {
  Blog.destroy({ where: { blog_id: req.params.blog_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


module.exports = {
  getAllBlogs,
  createBlogPost,
  getBlogPostByID,
  updateBlogPost,
  getBlogPostsByUserID,
  deleteBlogPostByID,
};
