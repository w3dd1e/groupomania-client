import { FaTableList, FaUser } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './navbar.css';

function Navbar() {
	const [userId, setUserId] = useState('');

	useEffect(() => {
		function getUserId() {
			const user = sessionStorage.getItem('userId');
			if (user) {
				setUserId(user);
			}
		}
		window.addEventListener('storage', getUserId);
		return window.removeEventListener('storage', getUserId);
	});

	const menuLinks = [
		{ link: 'feed', icon: <FaTableList /> },
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
