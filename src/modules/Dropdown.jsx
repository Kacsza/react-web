import { useState, useEffect, useRef } from "react";
import './Dropdown.css'

export default function Dropdown({ children, buttonText = "Menu" }){
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
        <div className="dropdown" ref={DropdownRef}>
            <button onClick={toggleDropdown}>Menu</button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-menu-inner">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}
export function DropdownItem({ text, href = "#" ,onClick }){ 
    return(
        <a href={href} className="dropdown-item">
            <span className="dropdown-item-text">{text}</span>
        </a>
    )
};
