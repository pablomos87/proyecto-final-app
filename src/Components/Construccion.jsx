import { Link } from "react-router-dom";
import React from "react";
import "./CSS/Construccion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import  { useNavigate } from 'react-router-dom';


const Construccion = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

return (
    <div className="constructionContainer d-flex align-items-center justify-content-center text-center">
    <div className="constructionTextContainer px-3 text-center d-flex flex-column justify-content-center">
       <p>PAGINA EN CONSTRUCCION</p>
       <div className= "constructionIcon"> 
       <FontAwesomeIcon icon={faPersonDigging} beat/>
       </div>
    <div className="lead">
    <buttom className="constructionButtom btn btn-lg fw-bold border-white bg-white" onClick={goBack}> <Link to="/login"> Regresar </Link> </buttom>
    
    </div>
    </div>
    </div>
  );
};

export default Construccion;
