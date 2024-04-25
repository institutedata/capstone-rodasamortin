const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
    Controllers.userController.getUsers(res);
});
// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
    Controllers.userController.createUser(req.body, res);
});
// matches POST requests sent to /api/users/signin
router.post("/signin", (req, res) => {
    Controllers.userController.signinUser(req.body, res);
});
// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put("/:user_id", (req, res) => {
    Controllers.userController.updateUser(req, res);
});
  // matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:user_id", (req, res) => {
    Controllers.userController.deleteUser(req, res);
});

module.exports = router;