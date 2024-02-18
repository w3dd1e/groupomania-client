import LoginForm from "../components/Auth/Login";
import Title from "../components/ToolBar/Title";

function LoginPage() {
  return (
    <div className='loginPage'>
      <Title />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
