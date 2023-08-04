import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/routines">Routines</Link>
        </li>
        <li>
          <Link to="/my-routines">My Routines</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
