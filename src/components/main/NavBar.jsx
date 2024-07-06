import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sessions">Sessions</NavLink>
            <NavLink to="/sessions/new">Log a new session</NavLink>
        </div>

    )
}

export default NavBar;