import { redirect } from "react-router-dom";
import Posts, { getPosts } from "../components/Posts/Posts";
import ToolBar from "../components/ToolBar/ToolBar";

export async function loader() {
  const response = await getPosts();

  if (response.status === 401) {
    return redirect("/login");
  } else {
    return response;
  }
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
