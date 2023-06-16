const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white">
      <ul className="flex list-none">
        <li className="p-5">
          <a href="/">Home</a>
        </li>
      </ul>
      <ul className="flex list-none">
        <li className="p-5">
          <a href="/">About</a>
        </li>
        <li className="p-5">
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
