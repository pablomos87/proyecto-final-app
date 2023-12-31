import logo from "./Images/logo.png";
import "./CSS/Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';




const Header = () => {
    return (
        <header>
           <Navbar data-bs-theme="dark" expand="lg" className="navbarContainer">
            <div className="logoContainer">
                <Link to="/home"> <img className="movieLogo" src={logo} alt="logo"/> </Link> 
            </div>
              <div className="searchBarContainer-1">
                        <Form className="formSearchBar">
                        <div className="formSearchInput">
                        <input className="formInputContainer"
                            label="Search"/>
                            <button className= "formSearchButton" type="button">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                    </Form> 
                    </div>
            <Navbar.Toggle  aria-controls="offcanvasNavbar"/>
            <Navbar.Collapse className="navbarCollapse">
                <nav className= "navContainer">
                <ul className="ulContainer">
                    <li className="liContainer"> <Link to="/signup">Sign Up</Link></li>
                    <li className="liContainer"> <Link to="/login">Log In</Link>
                    </li>
                    <li className="liContainer"><Link to="/peliculas">Peliculas</Link> </li>
                    <li className="liContainer"><Link to="/ranking">Ranking</Link> </li>
                    <div className="searchBarContainer-2">
                        <Form className="formSearchBar">
                        <div className="formSearchInput">
                        <input className="formInputContainer"
                            label="Search"/>
                            <button className= "formSearchButton" type="button">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                    </Form> 
                    </div>
                </ul>
                </nav> 
             </Navbar.Collapse>
            
    </Navbar>
     </header>
    );
};


export default Header;