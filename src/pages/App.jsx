import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import TitleBar from '../components/TitleBar';

//  This component serves as the main layout for the application,
//  with a CssBaseline, TitleBar, Outlet for rendering child routes,
//  and a Navigation component.
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
