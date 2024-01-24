import { useState } from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import ProfileIcon from './components/ProfileLink';
import Filter from './components/Filter';
import './App.css';
const listOptions = [Recent, Popular];

function App() {
	return (
		<>
			<div className='toolbar'>
				<ProfileIcon />
				<h1>GroupBoards</h1>
				<Filter />
			</div>
			<Posts />
			<Navbar />
		</>
	);
}

export default App;
