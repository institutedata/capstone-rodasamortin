const express = require("express");
const router = express.Router();
const LibraryController = require("../controllers/libraryController");

// matches GET requests sent to /api/library
// (the prefix is from server.js, line next to let libraryRoutes)
router.get("/", (req, res) => {
    LibraryController.getAllLibraries(res);
});

// matches POST requests sent to /api/library/create
router.post("/create", (req, res) => {
    LibraryController.createLibraryForUser(req.body, res);
});

module.exports = router;