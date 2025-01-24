import { Link } from "react-router-dom"
import './navbar.css'
import logo from './nike.png'



function Navbar() {
    return (

        <div className="navbar">
            <img src={logo} />
            <div className="options">
                <Link to='#'>Home</Link>
                <Link to='#'>Information</Link>
                <Link to='#'>Contact</Link>
                <Link to='#'>Features</Link>
            </div>
            <div className="login">
                Log In
            </div>

        </div>
    )
}

export default Navbar
