import React from "react";
import { useLoaderData } from "react-router-dom";

import { FaRegThumbsUp } from "react-icons/fa6";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import "./posts.css";

const postsURL = "http://localhost:3000/posts";
let posts = [];
let data = [];

export async function getPosts() {
  try {
    let response = await fetch(postsURL);
    posts = await response.json();
    console.log("Data fetched from database!");
    return posts;
  } catch (error) {
    console.log("Error:", error);
  }
}

function Posts() {
  const { posts } = useLoaderData();

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
    <p>
      <i>No posts</i>
    </p>
  );
}

export default Posts;
