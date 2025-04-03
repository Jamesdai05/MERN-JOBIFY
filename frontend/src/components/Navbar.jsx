import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/add">
          <li>Add Job</li>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar