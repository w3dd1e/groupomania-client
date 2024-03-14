import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function NewPost() {
	const navigate = useNavigate();
	const getUserData = (value) => {
		return sessionStorage.getItem(value);
	};

	const token = getUserData('token');

	const handleSubmit = async (event) => {
		event.preventDefault();
		//Convert FormData to JSON
		const data = new FormData(event.currentTarget);
		const formDataObj = {};
		data.forEach((value, key) => (formDataObj[key] = value));
		const json = JSON.stringify(formDataObj);
		//Fetch Login
		try {
			const response = await fetch('http://localhost:3000/posts', {
				method: 'POST',
				body: json,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token,
				},
			});
			if (!response.ok) {
				let invalidDiv = document.getElementById('errorDiv');
				invalidDiv.innerHTML =
					'<p>There was an error.  Your request was not processed.  Please try again later. </p>';
				throw new Error(response.status);
			}

			const postData = await response.json();
			console.log(postData);

			navigate(`/post/${postData.postId}`);
		} catch (error) {
			console.log('There was a problem with the fetch operation.', error);
		}
	};
	return (
		<Stack sx={{ p: 2 }}>
			<h2 className='pageTitle'>New Post</h2>
			<Box
				component='form'
				onSubmit={handleSubmit}
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
					<div id='errorDiv'></div>
				</Stack>
			</Box>
		</Stack>
	);
}
