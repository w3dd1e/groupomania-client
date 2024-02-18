import LoginForm from "../Auth/Login";
import Title from "../ToolBar/Title";

function LoginPage() {
  return (
    <div className='loginPage'>
      <Title />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
