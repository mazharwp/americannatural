import { Link } from "react-router-dom";
import logo from "../assets/images/logo-american.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/our-story">Our Story</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us & Locations</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/what-we-do">What We Do</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
