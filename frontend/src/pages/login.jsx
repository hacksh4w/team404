import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login("User123")}>Login</button>
    </div>
  );
};

export default LoginPage;
