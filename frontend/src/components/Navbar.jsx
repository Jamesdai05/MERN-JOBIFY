import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar