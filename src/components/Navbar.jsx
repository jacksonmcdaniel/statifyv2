import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-background text-text">
      <ul className="flex list-none">
        <li className="p-5">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      <ul className="flex list-none">
        <li className="p-5">
          <NavLink to="/">About</NavLink>
        </li>
        <li className="p-5">
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
