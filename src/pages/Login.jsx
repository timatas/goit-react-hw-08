import DocumentTitle from "../components/DocumentTitle";
import { LoginForm } from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>

      <div className="container">
        <LoginForm />
      </div>
    </>
  );
}
