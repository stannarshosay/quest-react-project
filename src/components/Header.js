import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <h1 className="main-text">MyShop</h1>
            <Link to="/search">Search</Link>
        </nav>
    );
}

export default Header;