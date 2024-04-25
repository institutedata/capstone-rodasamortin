import { terminal } from "virtual:terminal";
import { Form, useLoaderData, useFetcher } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export async function loader({ params }) {
  terminal.log("params.blog_id: ", params.blog_id);
  let blogPage = null;
  let comments = null;
  try {
    blogPage = await axios.get(
      `http://localhost:8080/api/blog/${encodeURIComponent(params.blog_id)}`
    );
    comments = await axios.get(
      `http://localhost:8080/api/comment/blog/${encodeURIComponent(
        params.blog_id
      )}`
    );
    blogPage = blogPage.data.data;
    comments = comments.data.data;
  } catch (error) {
    terminal.error("There was an error in BlogPostPageLoader!", error);
  }

  if (!blogPage || !comments) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { blogPage, comments };
}

function revealSpoiler() {
    var spoilerComment = document.getElementById('spoiler-comment')
    if (spoilerComment.style.color === 'black') {
        spoilerComment.style.color = 'white';
    } else {
        spoilerComment.style.color = 'black';
    }
};

export default function BlogPostPage() {
  const { blogPage, comments } = useLoaderData();

  terminal.log("blogPage: ", blogPage);
  terminal.log("comments: ", comments);

  return (
    <div className="BlogPostPage componentBox">
      <div id="blogpage" className="blogpage">
        <h1>{blogPage.title ? <>{blogPage.title}</> : <i>Empty</i>}</h1>
        <p>{blogPage.content ? <>{blogPage.content}</> : <i>Empty</i>}</p>
      </div>

      <div id="comments" className="comments">
        <h2>Comments</h2>
        <ul className="comment-list">
          {comments.length > 0 ? (
            <ul className="blog-list">
              {comments.map((comment) => (
                <li key={comment.comment_id}>
                  {comment.body ? (
                    <>
                      {comment.is_spoiler == 0 ?
                       <p>{comment.body}</p> :
                       <p id="spoiler-comment" onClick={revealSpoiler}>{comment.body}</p>
                       }
                      <p>
                        {comment.user.firstName} {comment.user.lastName}
                      </p>
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
        </ul>
      </div>
    </div>
  );
}
