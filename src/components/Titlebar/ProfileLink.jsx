import "./titlebar.css";

const user = { user: "username", image: "../src/assets/Ducky.jpeg" };
const userImage = user.image;

function ProfileIcon() {
  return (
    <div>
      <img src={userImage} className='profileIcon' />
    </div>
  );
}

export default ProfileIcon;
