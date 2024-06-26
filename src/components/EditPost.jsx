import * as React from 'react';
import { Box, Container, TextField, Button, Stack } from '@mui/material';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

// * FUTURE VERSIONS *
// The handleSubmit function should be handled with an action via React Router
// This was not updated previous due to useNavigate and redirect issues on submit.
// Hook such as useNavigate should not be used in actions

export default function EditPost() {
	const post = useLoaderData();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const token = getUserData('token');
		const postId = window.location.pathname.split('/')[2];

		//Convert FormData to JSON
		const data = new FormData(event.currentTarget);

		//Fetch Login
		try {
			const response = await fetch(
				`http://localhost:3000/posts/${postId}`,
				{
					method: 'PUT',
					body: data,
					headers: {
						Accept: 'application/json',
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
		<Container component='main' className='mainContainer' sx={{ p: 0 }}>
			<h2 className='pageTitle'>Edit Post</h2>
			<Box
				onSubmit={handleSubmit}
				component='form'
				sx={{
					'& .MuiTextField-root': { width: 1 },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					m: 'auto',
					mt: 0.7,
					maxWidth: '90%',
				}}
				id='form'
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
				<TextField
					variant='filled'
					fullWidth
					id='image'
					name='image'
					type='file'
					margin='normal'
				/>
				<Stack
					direction='column'
					flex={1}
					id='buttonGroup'
					sx={{ width: 0.5, m: 1 }}
				>
					{' '}
					<Button
						type='submit'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
						size='small'
						id='button'
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
						id='button'
					>
						Cancel
					</Button>
					<div id='errorDiv'></div>
				</Stack>
			</Box>
			<div id='errorDiv'></div>
		</Container>
	);
}
