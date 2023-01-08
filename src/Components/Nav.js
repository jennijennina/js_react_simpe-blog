import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav classname="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
