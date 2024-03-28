import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

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
		<Container component='main' maxWidth='xs' sx={{ p: 0 }}>
			<h2 className='pageTitle'>Edit Profile</h2>
			<Box
				onSubmit={handleSubmit}
				component='form'
				sx={{
					'& .MuiTextField-root': { width: 1 },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					p: 2,
					maxWidth: 360,
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
					defaultValue={user.fullName}
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					label='Department'
					margin='normal'
					name='department'
					defaultValue={user.department}
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					label='Location'
					margin='normal'
					name='location'
					defaultValue={user.location}
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					label='Bio'
					multiline
					rows={4}
					margin='normal'
					name='bio'
					defaultValue={user.bio}
				></TextField>
				<Stack direction='column' flex={1} sx={{ width: 0.5, m: 1 }}>
					{' '}
					<Button
						type='submit'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
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
					>
						Cancel
					</Button>
				</Stack>
			</Box>
			<div id='errorDiv'></div>
		</Container>
	);
}
