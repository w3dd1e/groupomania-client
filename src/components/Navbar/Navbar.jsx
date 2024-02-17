import {
  FaTableList,
  FaUser,
  FaRegMessage,
  FaGear,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const menuLinks = [
    { link: "feed", icon: <FaTableList /> },
    { link: "profile", icon: <FaUser /> },
    { link: "messages", icon: <FaRegMessage /> },
    { link: "search", icon: <FaMagnifyingGlass /> },
    { link: "settings", icon: <FaGear /> },
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
