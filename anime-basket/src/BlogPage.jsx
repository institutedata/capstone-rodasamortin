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

import NavBar from "./NavBar";
import Copyright from "./components/Copyright";

function BlogPage() {
  const { user } = useAuth();
  terminal.log("user.user_id: ", user.user_id);

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

  const [blogposts, setBlogposts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/blog/user/${encodeURIComponent(user.user_id)}`);
        setBlogposts(response.data.data);
      } catch (error) {
        terminal.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <>
      <div id="navbar-container">
        <NavBar />
      </div>
      <div id="blogpost-container">
        <Typography variant="h1" color="text.primary" align="center">
          Blog
        </Typography>
        <div id="blogpost-list">
          {blogposts.length > 0 ? (
            <ul className="blog-list">
              {blogposts.map((blogpost) => (
                <li key={blogpost.blog_id}>
                  
                    {blogpost.title || blogpost.content ? (
                      <>
                        <Link to={`${blogpost.blog_id}`}><h2>{blogpost.title}</h2></Link>
                        <p>{blogpost.content}</p> 
                      </>
                    ) : (
                      <i>Empty</i>
                    )}{" "}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No blogposts</i>
            </p>
          )}
        </div>
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

export default BlogPage;
