import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/activities">Activities</NavLink>
      <NavLink to="/routines">Routines</NavLink>
      <NavLink to="/my-routines">My Routines</NavLink>
    </nav>
  );
};

export default Navbar;
