import "./CSS/InicioUsuario.css";
import React from 'react';
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import userImage from "./Images/User.png";
import { Link } from "react-router-dom";

const InicioUsuario = () => {

  const usuarioJSON = localStorage.getItem("usuarioRegistrado");
  const usuario = JSON.parse(usuarioJSON);
  const nombreUsuario = usuario.nombre;
  const apellidoUsuario = usuario.apellido;
  const ciudadUsuario = usuario.ciudad;
  const paisUsuario = usuario.pais;


  return (
    <>
      <div className="profileHeroContainer gradient-custom-2 w-100">
        <Container className="profileContainer h-100 w-100">
          <Row className="profilerowContainer justify-content-center align-items-center h-100">
            <Col className="profileColContainer" lg="9" xl="7">
              <Card>
                <div className="cardContainer rounded-top text-white d-flex flex-row">
                  <div className="imageContainer ms-4 mt-5 d-flex flex-column justify-content-center">
                    <div className="justify-content-center text-center align-items-center">
                      <Image className="profileUserImage"
                        src={userImage}
                        alt="userImage" />
                    </div>
                    <Button className="profileButton d-flex justify-content-center align-items-center mb-2 p-0" variant="light">
                      Editar datos
                    </Button>
                  </div>
                  <div className="dataUser ms-2">
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
                <Card.Body className="profileOptionsContainer text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1 fw-bold">Mi perfil</p>
                    <div className="myProfileContainer  p-4 link-body-emphasis d-flex flex-column">
                      <Link to="/in-construction-site" className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Reseñas</Link>
                      <Link to="/in-construction-site" className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Puntuacions</Link>
                      <Link to="/in-construction-site" className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Películas favoritas</Link>
                      <Link to="/in-construction-site" className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Películas vistas</Link>
                      <Link to="/in-construction-site" className="font-italic mb-0 text-body-emphasis lead text-decoration-underline">Películas recomendadas</Link>
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
                        <p className="fst-italic text-center pt-5"> No hay actividad reciente para mostrar en este momento.</p>
                        <p className="text-center fw-bold pt-3">Puedes explorar nuestras secciones más populares</p>
                        <ul>
                          <Col className="optionsContainer text-center">
                            <li><Link to="/home" >Home</Link> </li>
                            <li>  <Link to="/peliculas">Peliculas</Link></li>
                            <li><Link to="/ranking">Ranking</Link> </li>
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