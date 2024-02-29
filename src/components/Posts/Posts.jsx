import React from "react";
import { useLoaderData } from "react-router-dom";

import { FaRegThumbsUp } from "react-icons/fa6";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import "./posts.css";

//Retrieve posts from database
export async function getPosts() {
  const postsURL = "http://localhost:3000/posts";
  let getToken = () => {
    return sessionStorage.getItem("token");
  };
  let token = getToken();
  let response = await fetch(postsURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Data fetched from database!");
  return response;
}

//Generate post elements to display on page
function Posts() {
  const posts = useLoaderData();

  return posts.length ? (
    <div className='board'>
      {posts.map((post) => {
        return (
          <div className='post' key={post.post_id}>
            <div className='postInfo'>
              <h2 className='postTitle'>{post.headline}</h2>
              <p className='postPreview'>{post.content}</p>
            </div>
            <FaRegThumbsUp className='thumbsUp' />
          </div>
        );
      })}
    </div>
  ) : (
    //If no posts in database, display "No posts"
    <p>
      <i>No posts</i>
    </p>
  );
}

export default Posts;
