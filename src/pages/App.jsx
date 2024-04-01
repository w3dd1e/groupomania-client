import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import TitleBar from '../components/TitleBar';

function App() {
	return (
		<>
			<CssBaseline />
			<TitleBar />
			<div className='content'>
				<Outlet />
			</div>
			<Navigation />
		</>
	);
}
export default App;
