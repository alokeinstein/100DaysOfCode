import "./Navbar.css";
// import logo from './logo.png'
const Navbar = () => {
  return (
    <div className="nav-parentContainer">
      <nav className="nav-main">
        <h3 className="nav-logo"> ForMeTodo </h3>
        <ul className="nav-list">
          <li className="nav-item"> Home</li>
          <li className="nav-item"> Contact </li>
          <li className="nav-item"> About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
