import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  return (
    <div>
      <h1>This is the Login page!</h1>
      <button onClick={signIn}>Login</button>
    </div>
  )
};

export default Login;