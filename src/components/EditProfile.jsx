import * as React from 'react';
import { Box, Container, TextField, Button, Stack } from '@mui/material';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

// * FUTURE VERSIONS *
// The handleSubmit function should be handled with an action via React Router
// This was not updated previous due to useNavigate and redirect issues on submit.
// Hook such as useNavigate should not be used in actions

// TODO : Add image upload functionality to change profile picture

export default function EditProfile() {
	const user = useLoaderData();
	const navigate = useNavigate();
	const token = getUserData('token');
	const userId = getUserData('userId');

	const handleSubmit = async (event) => {
		event.preventDefault();
		//Convert FormData to JSON

		const data = new FormData(event.currentTarget);
		const formDataObj = {};
		data.forEach((value, key) => (formDataObj[key] = value));
		const json = JSON.stringify(formDataObj);

		//Fetch Login
		try {
			const response = await fetch(
				`http://localhost:3000/profile/${userId}`,
				{
					method: 'PUT',
					body: json,
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + token,
					},
				}
			);
			if (!response.ok) {
				let invalidDiv = document.getElementById('errorDiv');
				invalidDiv.innerHTML =
					'<p>There was an error.  Your request was not processed.  Please try again later. </p>';
				throw new Error(response.status);
			}

			navigate(`/profile/${userId}`);
		} catch (error) {
			console.log('There was a problem with the fetch operation.', error);
		}
	};

	return (
		<Container component='main' className='mainContainer' sx={{ p: 0 }}>
			<h2 className='pageTitle'>Edit Profile</h2>
			<Box
				onSubmit={handleSubmit}
				component='form'
				id='form'
				sx={{
					'& .MuiTextField-root': { width: 1 },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '90%',
					m: 'auto',
					mt: 0.7,
				}}
				noValidate
				autoComplete='off'
			>
				<TextField
					fullWidth
					label='Name'
					margin='normal'
					variant='filled'
					name='fullName'
					id='fullName'
					defaultValue={user.fullName}
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					id='department'
					label='Department'
					margin='normal'
					name='department'
					defaultValue={user.department}
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					id='location'
					label='Location'
					margin='normal'
					name='location'
					defaultValue={user.location}
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					label='Bio'
					id='bio'
					multiline
					rows={6}
					margin='normal'
					name='bio'
					defaultValue={user.bio}
				></TextField>
				<Stack
					direction='column'
					flex={1}
					id='buttonGroup'
					sx={{ width: 0.5, m: 1 }}
				>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
						id='button'
					>
						Submit
					</Button>
					<Button
						variant='contained'
						onClick={() => {
							navigate(-1);
						}}
						color='error'
						sx={{ my: 2 }}
						id='button'
					>
						Cancel
					</Button>
				</Stack>
			</Box>
			<div id='errorDiv'></div>
		</Container>
	);
}
