"use strict";
const Anime = require("../models/anime");
const axios = require('axios');

// finds all anime in DB, then sends array as response
const getAllAnime = (res) => {
    Anime.findAll({}).then(function (data)  {
        res.send({ result: 200, data: data });
      }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };

// Controller function to get anime details by mal_id
const getJikanTitleByID = async (req, res) =>  {
    const mal_id = req.params.mal_id;
    const url = `https://api.jikan.moe/v4/anime/${mal_id}`;
    console.log("mal_id is: ", mal_id);
    console.log("url is: ", url);

    try {
        const response = await axios.get(url);
        const title_default = response.data.data.title;
        const title_english = response.data.data.title_english || response.data.data.title;
        
        res.send({ result: 200, title_default: title_default, title_english: title_english});
    } catch (error) {
        console.error("Failed to fetch MAL data:", error);
        return null;
    }
}

// Controller function to get anime details by mal_id and save them
const saveJikanTitleByID = async (req, res) => {
    const mal_id = req.params.mal_id;
    const url = `https://api.jikan.moe/v4/anime/${mal_id}`;
    console.log("mal_id is: ", mal_id);
    console.log("url is: ", url);

    try {
        const response = await axios.get(url);
        const title = response.data.data.title_english || response.data.data.title; // Use default title if English title is null
        
        // Check if the anime already exists in the database
        const [anime, created] = await Anime.findOrCreate({
            where: { mal_id: mal_id },
            defaults: {
                title: title,
            }
        });

        if (!created) {
            // If the anime already exists, update it
            anime.title = title;
            await anime.save();
        }

        res.json({ result: 200, message: created ? 'Anime saved successfully' : 'Anime updated successfully', anime });
    } catch (error) {
        console.error("Failed to fetch MAL data or save to database:", error);
        res.status(500).send("Failed to process the request");
    }
};

module.exports = {
    getAllAnime,
    getJikanTitleByID,
    saveJikanTitleByID
};