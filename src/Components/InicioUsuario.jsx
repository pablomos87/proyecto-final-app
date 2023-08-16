import "./CSS/InicioUsuario.css";
import React from 'react';
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import userImage from "./Images/User.png"

const InicioUsuario = () => {

  const usuarioJSON = localStorage.getItem("usuarioRegistrado");
  const usuario = JSON.parse(usuarioJSON);  
  const nombreUsuario = usuario.nombre;
  const apellidoUsuario = usuario.apellido;
  const ciudadUsuario = usuario.ciudad;
  const paisUsuario = usuario.pais;


  return (
    <>
<div className="profilContainer gradient-custom-2 w-100">
<Container className="py-5 h-100 w-100">
  <Row className="justify-content-center align-items-center h-100">
    <Col lg="9" xl="7">
      <Card>
        <div className="cardContainer rounded-top text-white d-flex flex-row">
          <div className="imageContainer ms-4 mt-5 d-flex flex-column justify-content-center">
            <div className="justify-content-center text-center">
            <Image className="profilUserImage"
              src={userImage}
              alt="userImage"/>
              </div>
            <Button className="profilButton d-flex justify-content-center align-items-center mb-2 p-0" variant="light">
              Editar datos
            </Button>
          </div>
          <div className="dataUsuario ms-2">
            <h1>{nombreUsuario} {apellidoUsuario}</h1>
            <p>{ciudadUsuario} ({paisUsuario})</p>
          </div>
        </div>
        <div className="infoUserContainer p-3 text-black">
          <div className="d-flex justify-content-end text-center py-1">
            <div>
              <p className="mb-1">0</p>
              <p className="text-muted mb-0 me-2">Seguidores</p>
            </div>
            <div>
              <p className="mb-1">0</p>
              <p className="text-muted mb-0 ms-2">Siguiendo</p>
            </div>
          </div>
        </div>
        <Card.Body className="profilOptionsContainer text-black p-4">
          <div className="mb-5">
            <p className="lead fw-normal mb-1 fw-bold">Mi perfil</p>
            <div className="myProfilContainer  p-4 link-body-emphasis">
              <p className="font-italic mb-0 text-body-emphasis lead text-decoration-underline"> Reseñas</p>
              <p className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Puntuaciones</p>
              <p className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Películas favoritas</p>
              <p className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Películas vistas</p>
              <p className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Películas recomendadas</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="lead fw-normal mb-0 fw-bold">Actividad reciente</p>
            <p className="mb-0">
              <a href="#!" className="text-muted">
                Show all
              </a>
            </p>
          </div>
          <Row>
            <Col className="mb-2">
            <div className="recentActivityContainer mb-5">
            <p className="fst-italic text-center pt-3"> No hay actividad reciente para mostrar en este momento.</p>
            <p className="text-center fw-bold pt-5">Puedes explorar nuestras secciones más populares</p>
      <ul>
        <Col className="optionsContainer text-center">
        <li><a href="./Peliculas.jsx" className="text-black">Peliculas</a></li>
        <li><a href="./Ranking.jsx"  className="text-black" >Ranking</a></li>
        <li><a href="./Home.jsx"  className="text-black">Home</a></li>
        </Col>
      </ul>
      </div>
            </Col>

          </Row>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
</div>

</>
);
};

export default InicioUsuario;