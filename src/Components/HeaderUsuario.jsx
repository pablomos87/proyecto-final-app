import React from "react";
import "./CSS/InicioUsuario.css";
import logo from "./Images/logo.png";
import "./CSS/HeaderUsuario.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const HeaderUsuario = () => {

  const usuarioJSON = localStorage.getItem("usuarioRegistrado");
  const usuario = JSON.parse(usuarioJSON);  
  const usuarioNombre = usuario.usuario;

const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (

    <header className="headerUserContainer">
      <navbar className="navbarUserContainer">

        <div className="logoUserContainer">
          <Link to="/Home"> <img src={logo} alt="logo" className="movieUserLogo" /> </Link>
        </div>

  

        <nav className="navUserContainer">
          <ul className="ulUserContainer">
            <li className="liUserContainer">
              <a href="./InicioUsuario">@{usuarioNombre} </a>
            </li>
            <div className="dropdownToggleContainer">
              <button className="dropdownToggleBtn" onClick={toggleMenu}>
                Menú
              </button>
              {showMenu && (
                <li className="dropdownMenu">
                  <div className="searchBarUserContainer">
          
            <div className="searchUserInputContainer">
              <input className="searchUseInput"
                label="Search" placeholder="Buscar"/>
      
            </div>
    
        </div>
        <Link to="/peliculas">Peliculas</Link>
        <Link to="/ranking">Ranking</Link> 
        <Link to="/in-construction-site">Reseñas</Link> 
        <Link to="/in-construction-site">Puntajes</Link> 
        <Link to="/in-construction-site">Favoritas</Link> 
                  
        
                </li>
              )}
            </div>
          </ul>
        </nav>
      
      </navbar>
    </header>
  )
};
export default HeaderUsuario;
