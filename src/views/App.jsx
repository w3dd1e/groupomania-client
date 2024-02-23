import Navbar from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import "./app.css";

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
