import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

export default function EditPost() {
	const post = useLoaderData();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const token = getUserData('token');
		const postId = window.location.pathname.split('/')[2];

		//Convert FormData to JSON
		const data = new FormData(event.currentTarget);
		const formDataObj = {};
		data.forEach((value, key) => (formDataObj[key] = value));
		const json = JSON.stringify(formDataObj);

		//Fetch Login
		try {
			const response = await fetch(
				`http://localhost:3000/posts/${postId}`,
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
				const invalidDiv = document.getElementById('errorDiv');
				invalidDiv.innerHTML =
					'<p>There was an error.  Your request was not processed.  Please try again later. </p>';
				throw new Error(response.status);
			}

			navigate(`/post/${postId}`);
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
					required
					fullWidth
					id='title'
					label='Title'
					margin='normal'
					name='headline'
					variant='filled'
					defaultValue={post.headline}
				></TextField>
				<TextField
					variant='filled'
					required
					fullWidth
					id='body'
					label='Body'
					name='content'
					multiline
					rows={4}
					margin='normal'
					defaultValue={post.content}
				></TextField>
				<Stack>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
						size='small'
					>
						Submit
					</Button>
					<Button
						size='small'
						variant='contained'
						color='error'
						sx={{ my: 2 }}
						onClick={() => {
							navigate(-1);
						}}
					>
						Cancel
					</Button>
					<div id='errorDiv'></div>
				</Stack>
			</Box>
			<div id='errorDiv'></div>
		</Stack>
	);
}
