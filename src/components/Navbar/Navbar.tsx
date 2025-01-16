import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbarWrapper">
            <nav className="navbar">
                <NavLink to={'/cats'}>
                    Все котики
                </NavLink>
                <NavLink to={'/favourites'}>
                    Любимые котики
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;