import * as React from 'react';
import {
	Avatar,
	Button,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, redirect } from 'react-router-dom';

// React Router uses actions to send info to the server
export const action = async () => {
	const data = await new FormData(document.querySelector('form'));
	//Convert FormData to JSON
	const formDataObj = {};
	data.forEach((value, key) => (formDataObj[key] = value));
	const json = JSON.stringify(formDataObj);

	//Fetch Login
	try {
		const response = await fetch('http://localhost:3000/auth/login', {
			method: 'POST',
			body: json,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			let invalidDiv = document.getElementById('invalidUser');
			invalidDiv.innerHTML = '<p>Invalid Email or Password</p>';
			throw new Error(response.status);
		}
		const userData = await response.json();
		sessionStorage.setItem('token', userData.token);
		sessionStorage.setItem('userId', userData.userId);

		return redirect('/feed');
	} catch (error) {
		console.log('There was a problem with the fetch operation.', error);
	}
	return null;
};
export default function SignIn() {
	return (
		<Container
			component='main'
			maxWidth='xs'
			className='mainContainer'
			sx={{
				display: 'flex',
				height: '80vh',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: 1,
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Box
					component={Form}
					method='post'
					noValidate
					sx={{
						mt: 1,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: 1,
					}}
				>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>

					<Button
						type='submit'
						size='small'
						variant='contained'
						sx={{ mt: 3, mb: 2, width: 0.5 }}
					>
						Sign In
					</Button>
					<Grid
						container
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<Grid item>
							<Link href='signup' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
						<div id='errorDiv'></div>
					</Grid>
				</Box>
				<div id='invalidUser'></div>
			</Box>
		</Container>
	);
}
