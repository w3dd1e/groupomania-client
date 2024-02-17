import Navbar from "../Navbar/Navbar";

import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div className='content'>
        <Outlet />
      </div>
      <Navbar />
    </>
  );
}

export default App;
