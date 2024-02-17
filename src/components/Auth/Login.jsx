import "../App.css";
import Navbar from "../Navbar/Navbar";
import ProfileIcon from "../Titlebar/ProfileLink";

function Login() {
  return (
    <>
      <div className='login'>
        <h1>GroupBoards</h1>
        <h2>by Groupomania</h2>
        <div className='loginForm'>
          <form>
            <label>
              Username: <input type='text'></input>
            </label>
            <br />

            <label>
              Password: <input type='text'></input>
            </label>
            <br />
            <button>Login</button>
          </form>
          <p>
            <a href='#'>Sign Up</a>
          </p>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Login;
