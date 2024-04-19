const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/commentController");

// matches POST requests sent to /api/comment/post
// (the prefix is from server.js, line next to let commentRoutes)
router.post("/post", (req, res) => {
    CommentController.postCommentForBlog(req.body, res);
});

// matches GET requests sent to /api/comment/123 (stores 123 in id param)
router.get("/blog/:blog_id", (req, res) => {
    CommentController.getCommentsForBlog(req, res);
});

// matches PUT requests to /api/comment/123 (stores 123 in id param)
router.put("/:comment_id", (req, res) => {
    CommentController.updateCommentByID(req, res);
});

// matches DELETE requests to /api/comment/123 (123 in id param)
router.delete("/:comment_id", (req, res) => {
    CommentController.deleteCommentByID(req, res);
});

module.exports = router;