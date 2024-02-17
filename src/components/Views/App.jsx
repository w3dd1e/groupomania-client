import Navbar from "../Navbar/Navbar";
import LoginForm from "../Auth/Login";
import Title from "../Titlebar/Title";

import "./App.css";

function App() {
  return (
    <>
      <div className='content'>
        <Title />
        <LoginForm />
      </div>
      <Navbar />
    </>
  );
}

export default App;
