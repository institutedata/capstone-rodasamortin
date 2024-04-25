const express = require("express");
const router = express.Router();
const AnimeController = require("../controllers/animeController");
// matches GET requests sent to /api/anime
// (the prefix is from server.js, line next to let animeRoutes)
router.get("/", (req, res) => {
    AnimeController.getAllAnime(res);
});
// matches GET requests sent to /api/anime/jikan/:mal_id
router.get("/jikan/:mal_id", (mal_id, res) => {
    AnimeController.getJikanTitleByID(mal_id, res);
});

// matches POST requests sent to /api/anime/save/:mal_id
router.post("/save/:mal_id", (mal_id, res) => {
    AnimeController.saveJikanTitleByID(mal_id, res);
});

module.exports = router;