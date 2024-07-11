import { NavLink } from "react-router-dom"

const Header = () => {
    return (
    <header className="header">
        <NavLink to="/" ><img className="header-logo" src="/public/study-tracker-logo.png" alt="A minimalist logo" /></NavLink>
        <h1>Study Tracker</h1>
    
    </header>)
}

export default Header