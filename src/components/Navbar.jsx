import {
	FaTableList,
	FaUser,
	FaRegMessage,
	FaGear,
	FaMagnifyingGlass,
} from 'react-icons/fa6';
import './Navbar.css';

function Navbar() {
	const menuLinks = [
		<FaTableList />,
		<FaUser />,
		<FaRegMessage />,
		<FaMagnifyingGlass />,
		<FaGear />,
	];
	return (
		<nav className='nav'>
			<ul className='menu'>
				{menuLinks.map((link) => {
					return <li key={link}>{link}</li>;
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
