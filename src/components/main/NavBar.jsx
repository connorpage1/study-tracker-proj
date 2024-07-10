import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div id="nav-bar">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/sessions" className='nav-link'>View Sessions</NavLink>
            <NavLink to="/sessions/new" className='nav-link'>Create a New Session</NavLink>
            <NavLink to="/charts" className='nav-link'>View Graphs</NavLink>
            <NavLink to="/subjects/edit" className='nav-link'>Customize Subjects</NavLink>
        </div>

    )
} 

export default NavBar;