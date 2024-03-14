import "./user.css";
import { useLoaderData } from "react-router-dom";

const userId = sessionStorage.userId;

export async function getProfile() {
  const profileURL = `http://localhost:3000/profile/${userId}`;
  let getToken = () => {
    return sessionStorage.getItem("token");
  };
  let token = getToken();
  let response = await fetch(profileURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Data fetched from database!");
  return response;
}

export function editButton() {
  if (isLoggedIn) {
    return (
      <button id='edit' className='button'>
        Edit
      </button>
    );
  }
}

function Profile() {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className='profile'>
      <img className='profileImage' src={user.profileImage}></img>
      <div className='about'>
        <h2 className='username'>{user.username}</h2>
        <p className='aboutInfo'>
          &emsp;{user.firstName}
          {user.lastName}
          <br />
          &emsp;{user.department}
          <br />
          &emsp;{user.location}
        </p>
      </div>
    </div>
  );
}

export default Profile;
