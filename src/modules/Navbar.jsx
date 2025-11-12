import {Dropdown, DropdownItem} from "./dropdown";
import './Navbar.css'

function Navbar(){
    return(
        <header className="header">
            <nav className="nav">
                <Dropdown buttonText="Menu">
                    <DropdownItem href="#home" text="test1" />
                    <DropdownItem href="#about" text="test2" />
                    <DropdownItem href="#test" text="test3" />
                </Dropdown>
            </nav>
        </header>
    )
}
export default Navbar