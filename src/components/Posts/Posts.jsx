import React from "react";
import { useQuery } from "@tanstack/react-query";

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
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (isPending) {
    return <div>Fetching posts...</div>;
  } else if (isError) {
    return <div>An error occurred: {error.message}</div>;
  } else {
    console.log("Posts queried!");
  }
  return (
    <div className='board'>
      {data.map((post) => {
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
  );
}

export default Posts;
