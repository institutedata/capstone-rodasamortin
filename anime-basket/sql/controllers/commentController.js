"use strict";
const Comment = require("../models/comment");
const User = require("../models/user");

// Create a comment for a blog post
const postCommentForBlog = async (data, res) => {
  console.log("user_id is: ", data.user_id);
  console.log("blog_id is: ", data.blog_id);
  console.log("content is: ", data.content);
  console.log("is_spoiler is: ", data.is_spoiler);

  Comment.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Fetch all the comments for a blog post
const getCommentsForBlog = async (req, res) => {
  Comment.findAll({ 
    where: { blog_id: req.params.blog_id },
    include: [
      {
        model: User,
        as: "user",
        attributes: ["user_id", "firstName", "lastName"],
      },
    ],
    order: [["createdAt", "ASC"]],
   })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const updateCommentByID = async (req, res) => {
  Comment.update(req.body, { where: { comment_id: req.params.comment_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteCommentByID = async (req, res) => {
  Comment.destroy({ where: { comment_id: req.params.comment_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  postCommentForBlog,
  getCommentsForBlog,
  updateCommentByID,
  deleteCommentByID,
};
