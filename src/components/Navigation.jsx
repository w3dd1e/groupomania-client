import * as React from 'react';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import { NavLink as RouterLink } from 'react-router-dom';

export default function Navigation() {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);

	return (
		<Box sx={{ pb: 7 }} ref={ref}>
			<Paper
				sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
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
						to='/profile'
						label='Profile'
						icon={<AccountCircleIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
}
