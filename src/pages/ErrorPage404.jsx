import { Link } from "react-router-dom";

export default function ErrorPage404() {
  return (
    <div>
      <h1>Error! Page not found! </h1>
      <Link to="/"> Go to Home page</Link>
    </div>
  );
}
