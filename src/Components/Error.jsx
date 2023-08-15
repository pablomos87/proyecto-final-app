
import React from "react";
import "./CSS/Error.css";


const Error = () => {

return (
    <div className="errorContainer d-flex align-items-center justify-content-center text-center">
    <div className="errorTextContainer px-3 text-center d-flex flex-column justify-content-center">
       <h1>Error</h1>
    <p className="lead">El nombre de usuario o la contraseña es incorrecto.</p>
    <p className="lead">
      <a href="/Login" className="btn btn-lg btn-light fw-bold border-white bg-white">Intentar de nuevo</a>
    </p>
   
    </div>
    </div>
  );
};

export default Error;
