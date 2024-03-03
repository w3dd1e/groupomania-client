import { FaTableList, FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const userId = sessionStorage.userId;

function Navbar() {
  const menuLinks = [
    { link: "feed", icon: <FaTableList /> },
    { link: `profile/${userId}`, icon: <FaUser /> },
  ];
  return (
    <nav className='nav'>
      <ul className='menu'>
        {menuLinks.map((link) => {
          return (
            <li key={link.link}>
              <NavLink to={link.link}>{link.icon}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
