import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div id="nav-bar">
            <NavLink to="/" className={({ isActive }) => isActive ? "active": ''}>Home</NavLink>
            <NavLink to="/sessions" className={({ isActive }) => isActive ? "active": ''}>Sessions</NavLink>
            <NavLink to="/sessions/new" className={({ isActive }) => isActive ? "active": ''}>Log a new session</NavLink>
        </div>

    )
}

export default NavBar;