import Navbar from "./Navbar";
import ProfileIcon from "./ProfileLink";
import Posts from "../Feed/Posts";
import "./user.css";

const user = {
  name: "Kelly Weddle",
  location: "Kansas City",
  department: "Sales",
  about: "I like movies!",
};

function Profile() {
  return (
    <>
      <div className='toolbar'>
        <ProfileIcon />
        <h1>GroupBoards</h1>
        <button>Edit</button>
      </div>

      <div className='profile'>
        <h2>{user.name}</h2>
        <p>Department: {user.department}</p>
        <p>Location: {user.location}</p>
        <p>About Me: {user.about}</p>
      </div>
      <Posts />

      <Navbar />
    </>
  );
}

export default Profile;
