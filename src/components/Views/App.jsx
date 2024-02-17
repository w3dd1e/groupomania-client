import Navbar from "../Navbar/Navbar";
import LoginForm from "../Auth/Login";
import Title from "../Titlebar/Title";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div className='content'>
        <Outlet />
        <Title />
        <LoginForm />
      </div>
      <Navbar />
    </>
  );
}

export default App;
