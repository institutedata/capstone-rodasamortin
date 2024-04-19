import "./App.css";
import { terminal } from "virtual:terminal";
import { useAuth } from "./AuthContext";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import axios from "axios";
import React, { 
  useState,
  useEffect,
} from "react";
import {
    Outlet,
} from "react-router-dom";

import NavBar from "./NavBar";
import Copyright from "./components/Copyright";

function UserBlog() {
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
      <div id="blogpost-container">
        <Outlet />
      </div>
      {/* Test content below */}
      <div>
        {showUser}
        {/* Test content above */}
      </div>
      <Copyright sx={{ mt: 5 }} />
    </>
  );
}

export default UserBlog;
