import "./posts.css";
import { FaRegThumbsUp } from "react-icons/fa6";
const posts = [
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
  { title: "New Post!", body: "blah blah blah blah blah blah" },
];
function Posts() {
  return (
    <div className='board'>
      {posts.map((post) => {
        return (
          <div className='post' key={posts[post]}>
            <div className='postInfo'>
              <h2 className='postTitle'>{post.title}</h2>
              <p className='postPreview'>{post.body}</p>
            </div>
            <FaRegThumbsUp className='thumbsUp' />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
