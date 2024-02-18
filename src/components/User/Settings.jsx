import ProfileIcon from "../ToolBar/ProfileLink";
import "./user.css";

function Settings() {
  return (
    <>
      <div className='toolbar'>
        <ProfileIcon />
        <h1>GroupBoards</h1>
        <button>Edit</button>
      </div>
      <div className='settings'>
        <h2>Theme</h2>
        <ul>
          <li>Dark Mode</li>
        </ul>
        <h2>Acessibility</h2>
        <ul>
          <li>Text Size</li>
          <li>Contrast</li>
        </ul>

        <h2>Support</h2>
        <ul>
          <li>Content Policy</li>
          <li>Report Issue</li>
        </ul>
        <p className='delete'>
          <a href='#'>Delete Account</a>
        </p>
      </div>
    </>
  );
}

export default Settings;
