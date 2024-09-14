import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-parentContainer">
      <nav className="nav-main">
        <h3 className="nav-logo"> <NavLink to='/'>OnlineDukan</NavLink> </h3>
        <ul className="nav-list">
          <li className="nav-item"><NavLink to='/'>Home</NavLink> </li>
          <li className="nav-item"><NavLink to='/cart'>Cart</NavLink>  </li>
          <li className="nav-item"><NavLink to='/orders'>Orders</NavLink> </li>
          <li className="nav-item"><NavLink to='/login'>Login</NavLink> </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
