import DocumentTitle from "../components/DocumentTitle";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <div className="container">
        <RegisterForm />
      </div>
    </div>
  );
}
