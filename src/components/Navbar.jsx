import {
	FaTableList,
	FaUser,
	FaRegMessage,
	FaGear,
	FaMagnifyingGlass,
} from 'react-icons/fa6';
import './styles.css';

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
					return (
						<li key={link}>
							<a href='#'>{link}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
