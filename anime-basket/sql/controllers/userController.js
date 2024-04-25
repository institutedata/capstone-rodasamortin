"use strict";
const Models = require("../models");
// finds all users in DB, then sends array as response
const getUsers = (res) => {
  Models.User.findAll({}).then(function (data)  {
      res.send({ result: 200, data: data });
    }).catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
  Models.User.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to update user ID from params
const signinUser = (credentials, res) => {
    Models.User.findOne({ where: { email: credentials.email } })
      .then((user) => {
        if (!user) {
          // User not found
          res.status(404).send({ result: 404, message: "User not found" });
        } else {
          if (user.password === credentials.password) {
            res.send({ result: 200, message: "Sign-in successful", user: user });
          } else {
            // Passwords do not match
            res.status(401).send({ result: 401, message: "Authentication failed" });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ result: 500, error: "An error occurred while attempting to sign in." });
      });
  };

// uses JSON from request body to update user ID from params
const updateUser = (req, res) => {
  Models.User.update(req.body, { where: { user_id: req.params.user_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// deletes user matching ID from params
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { user_id: req.params.user_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getUsers,
  createUser,
  signinUser,
  updateUser,
  deleteUser,
};
