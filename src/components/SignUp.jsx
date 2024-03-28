import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { redirect, Form } from 'react-router-dom';

export const action = async () => {
	const data = await new FormData(document.querySelector('form'));

	//Convert FormData to JSON
	const formDataObj = {};
	data.forEach((value, key) => (formDataObj[key] = value));
	const json = JSON.stringify(formDataObj);

	try {
		const response = await fetch('http://localhost:3000/auth/signup', {
			method: 'POST',
			body: json,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			let invalidDiv = document.getElementById('invalidUser');
			invalidDiv.innerHTML = '<p>There was an error.</p>';

			throw new Error(response.status);
		}
		if (response.ok) {
			confirm(
				'You have successfully signed up! Please log in to continue.'
			);
			return redirect('/login');
		}
	} catch (error) {
		console.log('There was a problem with the fetch operation.', error);
	}
};

export default function SignUp() {
	return (
		<Container
			component='main'
			maxWidth='xs'
			className='mainContainer'
			sx={{ maxWidth: { xs: '90%', sm: '60%', md: '50%', lg: '40%' } }}
		>
			<CssBaseline />
			<Box
				sx={{
					my: { xs: 10, sm: 20 },
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
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
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete='username'
								name='username'
								required
								fullWidth
								id='username'
								label='Username'
								autoFocus
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='new-password'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						variant='contained'
						size='small'
						sx={{ mt: 3, mb: 2, width: 0.5 }}
					>
						Sign Up
					</Button>
					<Grid
						container
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<Grid item>
							<Link href='login' variant='body2'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
