const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/blogController");

// matches GET requests sent to /api/blog/all
// (the prefix is from server.js, line next to let blogRoutes)
router.get("/all", (req, res) => {
    BlogController.getAllBlogs(res);
});

// matches POST requests sent to /api/blog/create
router.post("/create", (req, res) => {
    BlogController.createBlogPost(req.body, res);
});

// matches GET requests sent to /api/blog/123 (stores 123 in id param)
// Route to fetching blog posts by ID
router.get("/:blog_id", (req, res) => {
    BlogController.getBlogPostByID(req, res);
});

// matches PUT requests to /api/blog/123 (stores 123 in id param)
// Route to updating blog posts by blog_id
router.put("/:blog_id", (req, res) => {
    BlogController.updateBlogPost(req, res);
});

// matches GET requests sent to /api/blog/user/123 (stores 123 in id param)
// Route to fetching blog posts by user_id
router.get("/user/:user_id", (req, res) => {
    BlogController.getBlogPostsByUserID(req, res);
});

// matches DELETE requests to /api/blog/123 (123 in id param)
// Route to deleting blog posts
router.delete("/:blog_id", (req, res) => {
    BlogController.deleteBlogPostByID(req, res);
});

module.exports = router;