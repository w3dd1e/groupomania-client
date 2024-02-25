import { Link, redirect } from "react-router-dom";
import { useState } from "react";
import "./auth.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  //prevent html form defaults and handle login fetch operations
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        let invalidDiv = document.getElementById("invalidUser");
        invalidDiv.innerHTML = "<p>There was an error.</p>";

        throw new Error(response.status);
      }
      if (response.ok) {
        return redirect("/login");
      }
    } catch (error) {
      console.log("There was a problem with the fetch operation.", error);
    }
  }
  return (
    <div className='signup'>
      <form
        className='signUpForm'
        id='signUp'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='inputContainer'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            aria-label='username'
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className='inputContainer'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            aria-label='email'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className='inputContainer'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            aria-label='password'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className='buttonContainer'>
          <div>
            <Link to='/login'>Sign In</Link>
          </div>
          <input
            type='submit'
            onClick={(e) => handleSubmit(e)}
            value='Sign Up'
            className='button'
          ></input>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
