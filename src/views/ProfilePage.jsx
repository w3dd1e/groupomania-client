import { redirect } from "react-router-dom";
import Profile, { getProfile } from "../components/User/Profile";
import Posts from "../components/Posts/Posts";
import ToolBar from "../components/ToolBar/ToolBar";

export async function loader() {
  const response = await getProfile();

  if (response.status === 401) {
    return redirect("/login");
  } else {
    return response;
  }
}

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
