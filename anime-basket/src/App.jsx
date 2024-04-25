import { useState } from "react";
import "./App.css";
import Link from "@mui/material/Link";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NavBar from "./NavBar";
import SearchAnime from "./SearchAnime";
import Copyright from "./components/Copyright";
import { useAuth } from "./AuthContext";

import animeBasketLogo from "./images/anime-basket-logo.png"; // Adjust the path if necessary

function App() {
  const { user } = useAuth();

  // Display user information if logged in
  const showUser = (
    <div>
      {user ? (
        <>
          Welcome, {user.firstName} {user.lastName}!
        </>
      ) : (
        <>Welcome to our application!</>
      )}
    </div>
  );

  return (
    <>
      <div id="navbar-container">
        <NavBar />
      </div>
      <div id="main-container">
        {/* This is a comment */}
        <div id="header"></div>
        <div id="content">
          <div id="search-container">
          <SearchAnime /> {/* This is a comment */}
          </div>
        </div>
      </div>

      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          padding: "10px",
          borderRadius: "10%", // Make it round, for example
          border: "1px solid black", // Add a border
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
        }}
        alt="The Anime Basket logo"
        src={animeBasketLogo}
      />

      <div>
        <h1>No spoilers allowed!</h1>
      </div>
      {/* Test content below */}
      {showUser}
      {/* Test content above */}
      <Copyright sx={{ mt: 5 }} />
    </>
  );
}

export default App;
