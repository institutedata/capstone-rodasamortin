import React, { useState } from "react";
import axios from "axios";
import { terminal } from "virtual:terminal";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./App.css";

function SearchAnime() {
  const [searchInput, setSearchInput] = useState("");

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setIsLoading(true);
    setError("");
    const query = searchInput.trim();

    if (!query) {
      alert("Please enter a search query.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}`
      );
      terminal.log(response.data.data);

      setResults(response.data.data);
    } catch (error) {
      setError("Failed to fetch results");
      terminal.error("There was an error!", error);
    }
    setIsLoading(false);
};

  return (
    <div className="SearchAnime componentBox">
      <div id="search-input">
        <input
          type="text"
          placeholder="Search anime"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <button
        onClick={handleSearch}
        disabled={isLoading}
        className="anime-search"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>


      {error && <div>{error}</div>}
      
      <div className="result-list">
      <Grid container spacing={6}>
        {results.map((anime) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={anime.mal_id}>
            <Card
              sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                width="100%"
                image={anime.images.jpg.image_url}
                alt={anime.title_english || anime.title} // Use default title if English title is null
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {anime.title_english || anime.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
         
        ))}
      </Grid>
    </div>
    </div>
  );
}


export default SearchAnime;


