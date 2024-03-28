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
import {
	useLoaderData,
	Link,
	redirect,
	Form,
	useNavigate,
} from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

//Logout

//Fetch Profile
async function getProfile(userId) {
	const token = getUserData('token');

	const response = await fetch(`http://localhost:3000/profile/${userId}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	if (response.status === 401) {
		return redirect('/login');
	}
	if (response.status === 404) {
		throw new Error('User not found');
	}
	console.log('Data fetched from database!');
	return response;
}

async function deleteAccount(userId) {
	const token = getUserData('token');
	const response = await fetch(`http://localhost:3000/profile/${userId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	if (response.status === 401) {
		return redirect('/login');
	}
	if (response.status === 404) {
		throw new Error('User not found');
	}
	if (response.status === 400) {
		throw new Error('Bad request');
	}
	console.log('Deleted!');
	return response;
}

//Loader funciton for Router
export async function loader({ params }) {
	const token = sessionStorage.getItem('token');

	if (token) {
		const response = await getProfile(params.userId);
		const data = await response.json();
		if (data === null) {
			throw new Error('User not found');
		}

		return data;
	} else {
		return redirect('/login');
	}
}
export async function action({ params }) {
	const res = await deleteAccount(params.userId);
	const data = await res.json();
	if (data === null) {
		throw new Error('User not found');
	}
	return redirect('/login');
}

//Create list items for use in the profile
const ProfileItem = styled(ListItem)(() => ({
	padding: 0,
	alignItems: 'flex-start',
}));

export default function Profile() {
	const user = useLoaderData();
	const navigate = useNavigate();

	const logout = () => {
		sessionStorage.clear();
		navigate('/login');
	};
	return (
		<Container component='main' maxWidth='xs' sx={{ p: 0 }}>
			<h2 className='pageTitle'>Profile</h2>
			<Stack
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					p: 2,
				}}
			>
				<Paper elevation={1} sx={{ width: 1 }}>
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
									<ListItemText primary={user.fullName} />
								</ProfileItem>
								<ProfileItem>
									<ListItemText primary={user.department} />
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

				<Stack direction='column' flex={1} sx={{ width: 0.5, m: 1 }}>
					<Button
						component={Link}
						to='edit'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
						size='small'
					>
						Edit Profile
					</Button>
					<Form
						sx={{ width: 1 }}
						method='post'
						action='delete'
						onSubmit={(event) => {
							if (
								!confirm(
									'Please confirm you want to delete this account.'
								)
							) {
								event.preventDefault();
							}
						}}
					>
						<Button
							type='submit'
							variant='contained'
							color='error'
							sx={{ my: 2, width: 1 }}
							size='small'
						>
							Delete Account
						</Button>
					</Form>
					<Button
						variant='contained'
						sx={{ my: 2, width: 1 }}
						size='small'
						onClick={logout}
					>
						Logout
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
}
