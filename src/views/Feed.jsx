import Posts, { getPosts } from "../components/Posts/Posts";
import ToolBar from "../components/ToolBar/ToolBar";

function LoginPage() {
  return (
    <div className='feed'>
      <ToolBar />
      <Posts />
    </div>
  );
}

export default LoginPage;
