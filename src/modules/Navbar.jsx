import { useState, useEffect, useRef } from "react";
import './Navbar.css'

function Navbar(){
    // Zarządzanie stanem widoczności dropdownu
    const [isOpen, SetIsOpen] = useState(false);
    const toggleDropdown = () =>{
        SetIsOpen(!isOpen);
    }
    // Stworzenie referencji do elementu dropdown w celu wykrywania kliknięć poza nim
    const DropdownRef = useRef(null);

    useEffect(()=>{
        // Funkcja obsługująca kliknięcia poza dropdownem
        const HandleOutsideClicks = (event)=>{
            if(DropdownRef.current && !DropdownRef.current.contains(event.target)){
                SetIsOpen(false);
            }
        };

        // Dodanie nasłuchiwania zdarzenia kliknięcia na dokument
        document.addEventListener('mousedown', HandleOutsideClicks);
        return ()=>{
            document.removeEventListener('mousedown',HandleOutsideClicks);
        }
    })
    return(
        <header className="header">
            <nav className="nav">
                <ul className="dropdown" ref={DropdownRef}>
                    <li>
                        <button onClick={toggleDropdown}>Menu</button>
                        {isOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-menu-inner">
                                    <a href="#home" className="dropdown-item">
                                        <span className="dropdown-item-text">test1</span>
                                    </a>
                                    <a href="#about" className="dropdown-item">
                                        <span className="dropdown-item-text">test2</span>
                                    </a>
                                    <a href="#test" className="dropdown-item">
                                        <span className="dropdown-item-text">test3</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar