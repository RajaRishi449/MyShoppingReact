import Themebutton from "./Themebutton";
import logo from '../images/logo.jpg';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-custom">
                <img src={logo} className="logo" alt="logo" />
                <div className="topmenu"><Link to="/">Home</Link></div>
                <div className="topmenu"><Link to="/contact">Contact</Link></div>
                <div className="topmenu"><Link to="/login">Login</Link></div>
                <div className="topmenu"><Link to="/About">About</Link></div>
                <div className="topmenu"><Link to="/Cart">Cart ({cartItems.length})</Link></div>
                <Themebutton />
            </nav>
        </>
    );
}

export default Header;
