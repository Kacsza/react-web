import { useState, useEffect, useRef } from "react";

function Navbar(){
    const [isOpen, SetIsOpen] = useState(false);
    const toggleDropdown = () =>{
        SetIsOpen(!isOpen);
    }
    const DropdownRef = useRef(null);

    useEffect(()=>{
        const HandleOutsideClicks = (event)=>{
            if(DropdownRef.current && !DropdownRef.current.contains(event.target)){
                SetIsOpen(false);
            }
        };
        document.addEventListener('mousedown', HandleOutsideClicks);
        return ()=>{
            document.removeEventListener('mousedown',HandleOutsideClicks);
        }
    })
    return(
        <header>
            <nav className="nav">
                <div className="dropdown" ref={DropdownRef}>
                    <button onClick={toggleDropdown}>Menu</button>
                    {isOpen && (
                        <div className="dropdown-content">
                            <a href="#home">test1</a>
                            <a href="#about">test2</a>
                            <a href="#test">test3</a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar