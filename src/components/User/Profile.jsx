import "./user.css";

const user = {
  name: "Kelly Weddle",
  location: "Kansas City",
  department: "Sales",
  about: "I like movies!",
  image: "src/assets/Ducky.jpeg",
};

function Profile() {
  return (
    <div className='profile'>
      <img className='profileImage' src={user.image}></img>
      <div className='about'>
        <h2 className='fullName'>{user.name}</h2>
        <p className='aboutInfo'>
          Username: &emsp;
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
