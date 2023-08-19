import React from "react";
import "./CSS/Construccion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

const Construccion = () => {

return (
    <div className="constructionContainer d-flex align-items-center justify-content-center text-center">
    <div className="constructionTextContainer px-3 text-center d-flex flex-column justify-content-center">
       <p>PAGINA EN CONSTRUCCION</p>
       <div className= "constructionIcon"> 
       <FontAwesomeIcon icon={faPersonDigging} beat/>
       </div>
    </div>
    </div>
  );
};

export default Construccion;
