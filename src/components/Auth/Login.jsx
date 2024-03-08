import { Link } from 'react-router-dom';
import { useState } from 'react';
import './auth.css';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/auth/login', {
				method: 'POST',
				body: JSON.stringify({ email: email, password: password }),
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

			let data = await response.json();
			sessionStorage.setItem('token', data.token);
			sessionStorage.setItem('userId', data.userId);
			console.log(data);
		} catch (error) {
			console.log('There was a problem with the fetch operation.', error);
		}
	};
	return (
		<div className='login'>
			<form onSubmit={(e) => handleLogin(e)} method='post' id='login'>
				<div className='inputContainer'>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						aria-label='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='inputContainer'>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						name='password'
						aria-label='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='buttonContainer'>
					<div>
						<Link to='/signup'>Sign Up</Link>
					</div>
					<input type='submit' value='Sign In' className='button' />
				</div>
				<div id='invalidUser' className='invalidUser'></div>
			</form>
		</div>
	);
};

export default LoginForm;
