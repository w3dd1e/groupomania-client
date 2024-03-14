import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TitleBar from '../components/TitleBar';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<TitleBar />
			<div className='content'>
				<Outlet />
			</div>
			<Navigation />
		</ThemeProvider>
	);
}
export default App;
