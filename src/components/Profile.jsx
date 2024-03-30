import * as React from 'react';
import {
	Avatar,
	Typography,
	Container,
	List,
	ListItem,
	ListItemText,
	Stack,
	Button,
	Grid,
	Paper,
	styled,
} from '@mui/material';
import {
	useLoaderData,
	Link,
	redirect,
	Form,
	useNavigate,
} from 'react-router-dom';
import { getUserData } from '../helpers/helpers';
import useMediaQuery from '../hooks/useMediaQuery';

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
		<Container
			component='main'
			className='mainContainer'
			sx={{ p: 0, display: 'flex', flexDirection: 'column', flex: 1 }}
		>
			<h2 className='pageTitle'>Profile</h2>
			<Stack
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					m: 'auto',
					width: '100%',
					mt: 0.7,
					maxWidth: '90%',
					flex: 1,
				}}
			>
				<Paper
					elevation={1}
					sx={{ width: 1, flex: 1, display: 'flex' }}
				>
					<Grid
						container
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							flex: 1,
						}}
					>
						<Typography
							component='h3'
							fontWeight='bold'
							textAlign='center'
							fontSize='1.25rem'
							id='profileName'
						>
							{user.username}
						</Typography>
						<Grid
							sx={{
								display: 'flex',
								gap: 1.5,
								flex: 2,
							}}
						>
							<Avatar
								variant='rounded'
								alt='Ducky'
								src='../../src/assets/Ducky.jpeg'
								sx={{
									height: '100%',
									objectFit: 'cover',

									bgcolor: 'secondary.main',
									flex: 1,
								}}
								slotProps={{
									img: {
										className: 'profileImage',
										flex: 1,
									},
								}}
							/>

							<List
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
									flex: 1,
								}}
							>
								<ProfileItem alignItems='flex-start'></ProfileItem>
								<ProfileItem>
									<ListItemText
										primary={user.fullName}
										primaryTypographyProps={{
											id: 'profileInfo',
										}}
									/>
								</ProfileItem>
								<ProfileItem>
									<ListItemText
										primary={user.department}
										primaryTypographyProps={{
											id: 'profileInfo',
										}}
									/>
								</ProfileItem>
								<ProfileItem>
									<ListItemText
										primary={user.location}
										primaryTypographyProps={{
											id: 'profileInfo',
										}}
									/>
								</ProfileItem>
							</List>
						</Grid>
						<Typography
							variant='body1'
							sx={{ wordWrap: 'anywhere', flex: 1 }}
						>
							{user.bio}
						</Typography>
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
					<Button
						variant='contained'
						sx={{ my: 2, width: 1 }}
						size='small'
						onClick={logout}
					>
						Logout
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
				</Stack>
			</Stack>
		</Container>
	);
}
