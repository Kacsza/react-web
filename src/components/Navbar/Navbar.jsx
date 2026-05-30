import './Navbar.css'
import { NavLink } from "react-router";

function Navbar(){
    return(
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                <NavLink to="/omnie" className="nav-link">O mnie</NavLink>
            </nav>
        </header>
    )
}
export default Navbar