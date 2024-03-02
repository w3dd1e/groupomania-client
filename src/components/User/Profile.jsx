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

function Profile() {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className='profile'>
      <img className='profileImage' src={user.image}></img>
      <div className='about'>
        <h2 className='fullName'>{user.name}</h2>
        <p className='aboutInfo'>
          Username: &emsp;{user.username}
          <br />
          Department: &emsp;{user.department}
          <br />
          Location: &emsp;{user.location}
        </p>
      </div>
    </div>
  );
}

export default Profile;
