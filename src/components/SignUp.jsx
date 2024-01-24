import '../App.css';
import Navbar from './Navbar';

function SignUp() {
	return (
		<>
			<div className='signup'>
				<h1>GroupBoards</h1>
				<h2>by Groupomania</h2>
				<div className='signUpForm'>
					<form>
						<label>
							Username: <input type='text'></input>
						</label>
						<br />
						<label>
							Email: <input type='text'></input>
						</label>
						<br />
						<label>
							Password: <input type='text'></input>
						</label>
						<br />

						<button>Sign Up</button>
					</form>
				</div>
			</div>
			<Navbar />
		</>
	);
}

export default SignUp;
