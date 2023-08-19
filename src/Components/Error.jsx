import { Link } from "react-router-dom";
import React from "react";
import "./CSS/Error.css";


const Error = () => {

return (
    <div className="errorContainer d-flex align-items-center justify-content-center text-center">
    <div className="errorTextContainer px-3 text-center d-flex flex-column justify-content-center">
       <h1>Error</h1>
    <p className="lead">El nombre de usuario o la contraseña es incorrecto.</p>
    <div className= "errorButtomContainer">
      <buttom className="errorButtom btn btn-lg btn-light fw-bold border-white bg-white"> <Link to="/login"> Intentar de nuevo </Link> </buttom>
    </div>
    </div>
    </div>
  );
};

export default Error;
