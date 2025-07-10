import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">BookFinder</div>
            <ul className="tabs">
                <li><a href="#">Search</a></li>
                <li><a href="#">My Matches</a></li>
            </ul>
        </nav>
    )
}

export default Navbar