import * as React from 'react';
import {
	Box,
	BottomNavigation,
	BottomNavigationAction,
	Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink as RouterLink } from 'react-router-dom';

export default function Navigation() {
	const [value, setValue] = React.useState(0);
	//const navigate = useNavigate();
	const ref = React.useRef(null);

	return (
		<Box sx={{ pb: 7 }} ref={ref}>
			<Paper
				sx={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
				}}
				variant='outlined'
			>
				<BottomNavigation
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction
						LinkComponent={RouterLink}
						to='/newPost'
						label='New Post'
						icon={<AddIcon />}
					/>
					<BottomNavigationAction
						LinkComponent={RouterLink}
						to='/feed'
						label='Feed'
						icon={<ViewListIcon />}
					/>
					<BottomNavigationAction
						LinkComponent={RouterLink}
						to={'/profile/' + sessionStorage.userId}
						label='Profile'
						icon={<AccountCircleIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
}
