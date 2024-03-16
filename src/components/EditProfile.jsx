import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const getUserData = (value) => {
	return sessionStorage.getItem(value);
};

export default function NewPost() {
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
		<Stack sx={{ p: 2 }}>
			<h2 className='pageTitle'>Edit Profile</h2>
			<Box
				onSubmit={handleSubmit}
				component='form'
				sx={{
					'& .MuiTextField-root': { width: 1 },
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
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					label='Department'
					margin='normal'
					name='department'
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					label='Location'
					margin='normal'
					name='location'
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					label='Bio'
					multiline
					rows={4}
					margin='normal'
					name='bio'
				></TextField>
				<Stack>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
					>
						Submit
					</Button>
					<Button variant='contained' color='error' sx={{ my: 2 }}>
						Cancel
					</Button>
				</Stack>
			</Box>
			<div id='errorDiv'></div>
		</Stack>
	);
}
