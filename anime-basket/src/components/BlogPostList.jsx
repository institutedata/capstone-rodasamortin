import { terminal } from "virtual:terminal";
import React, { useState } from "react";
import axios from "axios";
import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
  useFetcher,
} from "react-router-dom";

import Typography from "@mui/material/Typography";
import "../App.css";

import { useAuth } from "../AuthContext";




function BlogPostList() {
  const placeholder_blogpost = {
    "blog_id": 1,
    "user_id": 2,
    "title": "Placeholder Post",
    "content": "Drumstick rump pig porchetta leberkas turkey.",
    "createdAt": "2024-04-07T12:23:15.000Z",
    "updatedAt": "2024-04-07T15:07:45.000Z"
  }

  const [error, setError] = useState("");
  const  { user } = useAuth();

  const handleBlogPosts = async () => {
    setError("");

    try {
      const response = await axios.get(
        `http://localhost:8080/api/blog/user/${encodeURIComponent(user.user_id)}`
      );
      terminal.log(response.data.data);

      setBlogposts(response.data.data);
    } catch (error) {
      setError("Failed to fetch blog posts");
      terminal.error("There was an error!", error);
    }
  }

  return (
    <div className="BlogPostList componentBox">
      <h1>Blog posts here</h1>
      <div id="blogpost" className="blogpost-list">
        <h2>{placeholder_blogpost.title}</h2>
        <p>{placeholder_blogpost.content}</p>
        <p>Created at: {placeholder_blogpost.createdAt}</p>
        <p>Updated at: {placeholder_blogpost.updatedAt}</p>
      </div>

      {error && <div>{error}</div>}

    </div>
  );
}

export default BlogPostList;
