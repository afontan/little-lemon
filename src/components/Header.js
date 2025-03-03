import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Nav from "./Nav";
import "./styles/Header.css"

function Header() {
    return (
        <header>
            <div className="header-nav">
                <NavLink to = "/">
                    {<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}
                </NavLink>
                <Nav />
            </div>
        </header>
    );
}

export default Header;