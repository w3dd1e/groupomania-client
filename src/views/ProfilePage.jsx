import Profile from "../components/User/Profile";
import Posts from "../components/Posts/Posts";
import ToolBar from "../components/ToolBar/ToolBar";

function ProfilePage() {
  return (
    <>
      <ToolBar />
      <Profile />
      <Posts />
    </>
  );
}

export default ProfilePage;
