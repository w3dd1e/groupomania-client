import { Link } from "react-router-dom";
import "./auth.css";

function SignUp() {
  return (
    <div className='signup'>
      <form className='signUpForm' id='signUp'>
        <div className='inputContainer'>
          <label for='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            aria-label='username'
          ></input>
        </div>
        <div className='inputContainer'>
          <label for='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            aria-label='email'
          ></input>
        </div>
        <div className='inputContainer'>
          <label for='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            aria-label='password'
          ></input>
        </div>
        <div className='buttonContainer'>
          <div>
            <Link to='/login'>Sign In</Link>
          </div>
          <input type='submit' value='Sign Up' className='button'></input>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
