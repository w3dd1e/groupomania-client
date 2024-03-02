import { redirect, json } from "react-router-dom";
import Profile, { getProfile } from "../components/User/Profile";
import Posts, { getPosts } from "../components/Posts/Posts";
import ToolBar from "../components/ToolBar/ToolBar";

export const loader = async () => {
  const [profile, posts] = await Promise.all([getProfile(), getPosts()]);
  if (profile.status === 401 || posts.status === 401) {
    return redirect("/login");
  } else {
    //TODO RETURN TWO LOADER RESPONSES
    return response;
  }
};

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
