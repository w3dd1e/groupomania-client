import { useState } from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import './App.css';

function App() {
	return (
		<>
			<Posts />
			<Navbar />{' '}
		</>
	);
}

export default App;
