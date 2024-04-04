import * as React from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import { Form, redirect } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';
import { Container } from '@mui/material';

// TODO : Add image upload functionality to allow users to submit images with posts

//Actions used with React Router to send data to server
export const action = async () => {
	const data = await new FormData(document.querySelector('form'));
	const token = getUserData('token');
	const invalidDiv = document.getElementById('errorDiv');

	//Convert FormData to JSON
	const formDataObj = {};
	data.forEach((value, key) => (formDataObj[key] = value));
	console.log(data.title);
	//const json = JSON.stringify(formDataObj);

	//Fetch Login

	try {
		const response = await fetch(`http://localhost:3000/posts/`, {
			method: 'POST',
			body: data,
			headers: {
				Accept: 'application/json',

				Authorization: 'Bearer ' + token,
			},
		});
		if (!response.ok) {
			invalidDiv.innerHTML =
				'<p>There was an error.  Your request was not processed.  Please try again later. </p>';
			throw new Error(response.status);
		}
		const responseJson = await response.json();
		const postId = responseJson.postId;
		return redirect(`/post/${postId}`);
	} catch (error) {
		console.log('There was a problem with the fetch operation.', error);
	}
	return null;
};

export default function NewPost() {
	return (
		<Container component='main' className='mainContainer' sx={{ p: 0 }}>
			<h2 className='pageTitle'>New Post</h2>
			<Box
				component={Form}
				method='post'
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
				></TextField>
				<TextField
					variant='filled'
					fullWidth
					id='body'
					label='Body'
					name='content'
					multiline
					rows={6}
					margin='normal'
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
					id='buttonGroup'
					flex={1}
					sx={{ width: 0.5, m: 1 }}
				>
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
						type='reset'
						size='small'
						variant='contained'
						color='error'
						sx={{ my: 2 }}
						id='button'
					>
						Reset
					</Button>

					<div id='errorDiv'></div>
				</Stack>
			</Box>
		</Container>
	);
}
