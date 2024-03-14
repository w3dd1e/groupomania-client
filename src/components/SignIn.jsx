import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../hooks/useSessionStorage';

export default function SignIn() {
	const navigate = useNavigate();
	const [token, setToken] = useSessionStorage('token', null);
	const [userId, setUserId] = useSessionStorage('userId', null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		//Convert FormData to JSON
		const data = new FormData(event.currentTarget);
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

			setToken(userData.token);
			setUserId(userData.userId);

			navigate('/feed');
		} catch (error) {
			console.log('There was a problem with the fetch operation.', error);
		}
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
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
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs></Grid>
						<Grid item>
							<Link href='signup' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
				<div id='invalidUser'></div>
			</Box>
		</Container>
	);
}
