import { Link } from "react-router-dom";
import "./auth.css";

function LoginForm() {
  return (
    <div className='login'>
      <form className='loginForm' id='login'>
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
            <a href='#'>Sign Up</a>
          </div>
          <input type='submit' value='Sign In' className='button'></input>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
