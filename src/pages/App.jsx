import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function App() {
	return (
		<>
			<div className='content'>
				<Outlet />
			</div>
			<Navigation />
		</>
	);
}
export default App;
