import { Link } from "react-router-dom";
import React from "react";
import "./CSS/Error.css";
import { Button } from 'react-bootstrap';


const Error = () => {

return (
    <div className="errorContainer d-flex align-items-center justify-content-center text-center">
    <div className="errorTextContainer px-3 text-center d-flex flex-column justify-content-center">
       <h1>Error</h1>
    <p className="lead">El nombre de usuario o la contraseña es incorrecto.</p>
    <div className= "errorButtonContainer">
    <Button className="errorButton btn-light fw-bold border-white bg-white w-50" variant="secondary" active>
    <Link to="/login"> REGRESAR </Link>
      </Button>
      
    </div>
    </div>
    </div>
  );
};

export default Error;
