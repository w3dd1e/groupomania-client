import Posts, { getPosts } from "../components/Posts/Posts";
import ToolBar from "../components/ToolBar/ToolBar";

export async function loader() {
  const posts = await getPosts();
  return { posts };
}

function Feed() {
  return (
    <div className='feed'>
      <ToolBar />
      <Posts />
    </div>
  );
}

export default Feed;
