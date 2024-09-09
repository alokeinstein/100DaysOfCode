import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">
            <li>REACT REDUX SHOPPING CART</li>
          </NavLink>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/cart">
            <li>Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
