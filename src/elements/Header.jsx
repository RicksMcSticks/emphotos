import './Header.css'
import { NavLink} from 'react-router-dom'

const Header = () => {
    return (

        <header id="main-header">
            <h1>Emma Photos</h1>
        <nav>
        <NavLink to="/"
        className={({ isActive }) => {
            return isActive ? "Active-navlink" : null
        }}
        >Home</NavLink>


        <NavLink to="/About"
        className={({ isActive }) => {
            return isActive ? "Active-navlink" : null
        }}
        >About</NavLink>
        </nav>
        </header>

    )
       
}


export default Header