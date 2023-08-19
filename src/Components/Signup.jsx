import "./CSS/Signup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [usuarioNombre, setUsuarioNombre] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [confirmEmailUsuario, setConfirmEmailUsuario] = useState("");
  const [paisUsuario, setPaisUsuario] = useState("");
  const [ciudadUsuario, setCiudadUsuario] = useState("");
  const [fechaNacimientoUsuario, setFechaNacimientoUsuario] = useState("");
  const [generoUsuario, setGeneroUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const [confirmPasswordUsuario, setConfirmPasswordUsuario] = useState("");
  
  const navigate = useNavigate();
  
  const cargarDatos = () => {
    console.log("El usuario se cargó a la database");
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailUsuario)) {
      alert("Por favor, ingresa una dirección de email válida.");
      return;
    }
  
    const camposRequeridos = [
      nombreUsuario, 
      apellidoUsuario, 
      usuarioNombre, 
      paisUsuario, 
      ciudadUsuario, 
      fechaNacimientoUsuario, 
      generoUsuario, 
      emailUsuario, 
      confirmEmailUsuario, 
      passwordUsuario, 
      confirmPasswordUsuario
    ];
  
    if (camposRequeridos.includes("")) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }
  
    if (emailUsuario !== confirmEmailUsuario) {
      console.log("Las casillas de email no coinciden");
      alert("Las casillas de email no coinciden");
      return;
    }
  
    if (passwordUsuario !== confirmPasswordUsuario) {
      console.log("Las contraseñas no coinciden");
      alert("Las contraseñas no coinciden");
      return;
    }
  
    const datosUsuario = {
      nombre: nombreUsuario,
      apellido: apellidoUsuario,
      usuario: usuarioNombre,
      pais: paisUsuario,
      ciudad: ciudadUsuario,
      email: emailUsuario,
      fechaNacimiento: fechaNacimientoUsuario,
      genero: generoUsuario,
      password: passwordUsuario,
      confirmPassword: confirmPasswordUsuario,
    };
  
    console.log(datosUsuario);
  
    const datosUsuarioJSON = JSON.stringify(datosUsuario);
    localStorage.setItem("usuarioRegistrado", datosUsuarioJSON);
    alert("Registro con éxito");
    navigate("/profile-user-02");
    window.scrollTo(0, 0);
  };


  return (
    <>
    
    <div className="singUpTitleContainer d-flex flex-column justify-content-center align-items-left container-fluid ">
        <h1 className="display-6 fw-bold pb-0">SIGN UP</h1>
        <p className="fw-normal"> Crea una cuenta y se parte de nuestra comunidad</p>
      </div>
    <div className="signUpContainer">
        <form className="signUpFormContainer">
          <div className="inputFormContainer">

            
          <div className= "signUpInputsGroup1">
              <div className="signUpInputsContainer">
                <label htmlFor="nombreUsuario" >Nombre</label>
                <input
                  type="text"
                  id="nombreUsuario"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  className="form-control"
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)}
                  required
                />
              </div>

              <div className="signUpInputsContainer">
                <label htmlFor="apellidoUsuario">Apellido</label>
                <input
                  type="text"
                  id="apellidoUsuario"
                  name="apellido"
                  placeholder="Ingresa tu apellido"
                  className="form-control"
                  value={apellidoUsuario}
                  onChange={(e) => setApellidoUsuario(e.target.value)}
                  required
                />
              </div>
              
              <div className="signUpInputsContainer">
              <label htmlFor="usuarioNombre">Nombre de Usuario</label>
                <input
                  type="text"
                  id="usuarioNombre"
                  name="usuario"
                  placeholder="Ingresa tu usuario"
                  className="form-control"
                  required
                  value={usuarioNombre}
                  onChange={(e) => setUsuarioNombre(e.target.value)}
                />
              </div >

              </div>

              <div className= "signUpInputsGroup2">                         
              <div className="signUpInputsContainer">
                <label htmlFor="ciudadUsuario">Ciudad</label>
                <input
                  type="text"
                  id="ciudadUsuario"
                  name="ciudad"
                  placeholder="Ingresa tu ciudad"
                  className="form-control"
                  required
                  value={ciudadUsuario}
                  onChange={(e) => setCiudadUsuario(e.target.value)}
                />
              </div>
              <div className="signUpInputsContainer">
                <label htmlFor="paisUsuario">Pais</label>
                <input
                  type="text"
                  id="paisUsuario"
                  name="pais"
                  placeholder="Ingresa tu pais"
                  className="form-control"
                  required
                  value={paisUsuario}
                  onChange={(e) => setPaisUsuario(e.target.value)}
                />
              </div>
      
              <div className="signUpInputsContainer">
              <label htmlFor="fechaNacimientoUsuario">Fecha de nacimiento</label>
            <input
                type="date"
                id="fechaNacimientoUsuario"
                name="fechaNacimiento"
                placeholder="Ingresa tu fecha de nacimiento"
                className="form-control"
                required
                value={fechaNacimientoUsuario}
                onChange={(e) => setFechaNacimientoUsuario (e.target.value)}/>
          </div>
          
              <div className="signUpInputsContainer">
                <label htmlFor="generoUsuario">Género</label>
                <select
                  id="generoUsuario"
                  name="gender"
                  className="form-control"
                  value={generoUsuario}
                  onChange={(e) => setGeneroUsuario(e.target.value)}
                  require>
                  <option value="">Selecciona una opción</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
          
              </div>

              <div className= "signUpInputsGroup3">  

               <div className="signUpInputsContainer">
                <label htmlFor="emailUsuario">Email</label>
                <input
                  type="email"
                  id="emailUsuario"
                  name="email"
                  placeholder="Ingresa tu email"
                  className="form-control"
                  required
                  value={emailUsuario}
                  onChange={(e) => setEmailUsuario(e.target.value)}
                />
              </div>
              <div className="signUpInputsContainer">
                <label htmlFor="confrmEmailUsuario">Confirmar Email</label>
                <input
                  type="email"
                  id="confrmEmailUsuario"
                  name="email"
                  placeholder="Confirmá tu email"
                  className="form-control"
                  required
                  value={confirmEmailUsuario}
                  onChange={(e) => setConfirmEmailUsuario(e.target.value)}
                />
              </div>          
              <div className="signUpInputsContainer">
                <label htmlFor="passwordUsuario">Contraseña</label>
                <input
                  type="password"
                  id="passwordUsuario"
                  name="password"
                  placeholder="Ingresa tu password"
                  className="form-control"
                  required
                  value={passwordUsuario}
                  onChange={(e) => setPasswordUsuario(e.target.value)}
                />
              </div>
              <div className="signUpInputsContainer">
                <label htmlFor="confirmPasswordUsuario">Confirmar contraseña</label>
                <input
                  type="password"
                  id="confirmPasswordUsuario"
                  name="confirmPassword"
                  placeholder="Confirma tu password"
                  className="form-control"
                  required
                  value={confirmPasswordUsuario}
                  onChange={(e) => setConfirmPasswordUsuario(e.target.value)}
                />
              </div>
            </div>
            </div>

          <div className="signUpButtonContainer">
            <button type="button" onClick={cargarDatos}> 
              Registrarse
            </button>
          </div>
        
      </form>
    </div>
    </>
  );
};

export default Signup;