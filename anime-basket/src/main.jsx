import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SignIn from "./SignIn";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import BlogPage from "./BlogPage.jsx";
import UserBlog from "./UserBlog.jsx";
import BlogPostList, {
  loader as blogpostLoader,
} from "./components/BlogPostList2.jsx"
import BlogPostPage, {
  loader as blogpostPageLoader,
} from "./components/BlogPostPage.jsx";

import { AuthProvider, useAuth } from "./AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "blog",
    element: <UserBlog />,
    children: [
      {
        path: "/blog",
        element: <h1>Welcome to the User Blog</h1>,
      },
      {
        path: "/blog/:user_id",
        element: <BlogPostList />,
        loader: blogpostLoader,
        children: [

        ]
      },
      {
        path: "/blog/:user_id/:blog_id",
        element: <BlogPostPage />,
        loader: blogpostPageLoader,
      },
    ],
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
