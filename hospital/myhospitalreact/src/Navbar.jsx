import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar animate-fade">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <div className="logo-wrapper">
              <span className="logo-text">LIFE<span className="text-secondary">CARE</span></span>
            </div>
          </Link>
        </div>
        
        <ul className="navbar-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/patient" className="nav-link">Registration</Link></li>
          <li><Link to="/appointment" className="nav-link">Appointments</Link></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/patient_login" className="login-link">Patient Login</Link>
          <Link to="/superlogin" className="btn-primary">Staff Portal</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
