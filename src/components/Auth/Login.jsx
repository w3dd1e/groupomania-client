import { Link } from "react-router-dom";
import "./auth.css";

fuction Login()

function LoginForm() {
  return (
    <div className='login'>
      <form
        method='post'
        action={login}
        id='login'
      >
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
            <Link to='/signup'>Sign Up</Link>
          </div>
          <input type='submit' value='Sign In' className='button'></input>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
