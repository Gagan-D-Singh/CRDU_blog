import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/"><li>Home</li></Link>
      <Link to="/posts"><li>Post</li></Link>
      <Link to="/about"><li>About</li></Link>
    </nav>
  );
};

export default Navbar;
