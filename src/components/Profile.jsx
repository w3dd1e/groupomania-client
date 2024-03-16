import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { redirect } from 'react-router-dom';
import { useLoaderData, Link } from 'react-router-dom';

//Function to get user data from session storage
const getUserData = (value) => {
	return sessionStorage.getItem(value);
};

//Fetch Profile
async function getProfile() {
	const token = getUserData('token');
	const userId = getUserData('userId');
	const profileURL = `http://localhost:3000/profile/${userId}`;

	let response = await fetch(profileURL, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	console.log('Data fetched from database!');
	return response;
}

//Loader funciton for Router
export async function loader() {
	const response = await getProfile();

	if (response.status === 401) {
		return redirect('/login');
	} else {
		return response;
	}
}

//Create list items for use in the profile
const ProfileItem = styled(ListItem)(() => ({
	padding: 0,
	alignItems: 'flex-start',
}));

export default function Profile() {
	const user = useLoaderData();
	return (
		<Container component='main' maxWidth='xs' sx={{ p: 2 }}>
			<h2 className='pageTitle'>Profile</h2>

			<Grid container justifyContent='center' spacing={3} sx={{ mt: 1 }}>
				<Grid>
					<Paper elevation={6}>
						<Grid container spacing={2} sx={{ p: 1 }}>
							<Grid>
								<Avatar
									variant='rounded'
									alt='Ducky'
									src='../../src/assets/Ducky.jpeg'
									sx={{
										m: 1,
										width: 125,
										height: 125,
										bgcolor: 'secondary.main',
									}}
								/>
							</Grid>
							<Grid>
								<List
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-start',
									}}
								>
									<ProfileItem alignItems='flex-start'>
										<Typography
											component='h1'
											variant='h5'
											fontWeight='bold'
										>
											{user.username}
										</Typography>
									</ProfileItem>
									<ProfileItem>
										<ListItemText primary={user.name} />
									</ProfileItem>
									<ProfileItem>
										<ListItemText
											primary={user.department}
										/>
									</ProfileItem>
									<ProfileItem>
										<ListItemText primary={user.location} />
									</ProfileItem>
								</List>
							</Grid>

							<Grid sx={{ textAlign: 'center', p: 1, m: 1 }}>
								{user.bio}
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Stack direction='column' flex={1} sx={{ p: 1.5 }}>
					<Button
						component={Link}
						to='/editProfile'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
					>
						Edit Profile
					</Button>
					<Button
						component={Link}
						variant='contained'
						color='error'
						sx={{ my: 2 }}
					>
						Delete Account
					</Button>
				</Stack>
			</Grid>
		</Container>
	);
}
