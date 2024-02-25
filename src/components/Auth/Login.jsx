import { Link, redirect } from "react-router-dom";
import { useState } from "react";
import "./auth.css";

//useState to get data from form
// and set logged in values for logged in confirmation
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //prevent html form defaults and handle login fetch operations
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        let invalidDiv = document.getElementById("invalidUser");
        invalidDiv.innerHTML = "<p>Invalid Email or Password</p>";
        throw new Error(response.status);
      }

      let data = await response.json();
      sessionStorage.setItem("token", data.token);
      console.log(data);

      return redirect("/feed");
    } catch (error) {
      console.log("There was a problem with the fetch operation.", error);
    }
  }

  // Login elements
  return (
    <div className='login'>
      <form onSubmit={(e) => handleSubmit(e)} method='post' id='login'>
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
            <Link to='/signup'>Sign Up</Link>
          </div>
          <input
            onClick={(e) => handleSubmit(e)}
            type='submit'
            value='Sign In'
            className='button'
          ></input>
        </div>
        <div id='invalidUser' className='invalidUser'></div>
      </form>
    </div>
  );
}

export default LoginForm;
