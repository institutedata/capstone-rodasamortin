import { terminal } from "virtual:terminal";
import { Form, useLoaderData, useFetcher } from "react-router-dom";
import axios from "axios";
import { 
    Link,
} from "react-router-dom";

export async function loader({ params }) {
  terminal.log("params.user_id: ", params.user_id);
  let blogPosts = null;
  try {
    blogPosts = await axios.get(
      `http://localhost:8080/api/blog/user/${encodeURIComponent(
        params.user_id
      )}`
    );
    terminal.log(blogPosts.data.data);
    blogPosts = blogPosts.data.data;
  } catch (error) {
    terminal.error("There was an error!", error);
  }

  if (!blogPosts) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { blogPosts };
}

export default function BlogPostList() {
  const { blogPosts } = useLoaderData();

  return (
    <div className="BlogPostList componentBox">
      <h1>Blog posts here</h1>
      <div id="blogpost" className="blogpost-list">
        {blogPosts.length > 0 ? (
          <ul className="blog-list">
            {blogPosts.map((blogPost) => (
              <li key={blogPost.blog_id}>
                {blogPost.title || blogPost.content ? (
                  <>
                    <Link to={`${blogPost.blog_id}`}>
                      <h2>{blogPost.title}</h2>
                    </Link>
                    <p>{blogPost.content}</p>
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
  );
}
