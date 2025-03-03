import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Menu</NavLink></li>
            <li><NavLink to="/reservations">Book a table</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;