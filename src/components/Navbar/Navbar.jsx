import './Navbar.css'
import { NavLink } from "react-router";

function Navbar(){
    return(
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </nav>
        </header>
    )
}
export default Navbar