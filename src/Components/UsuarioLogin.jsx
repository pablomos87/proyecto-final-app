import "./CSS/UsuarioLogin.css";
import React from 'react';
import { Container, Row, Col, Card, Button, Image, ListGroup } from "react-bootstrap";
import userLoginImage from "./Images/UsuarioLogin.png";
import { Link } from "react-router-dom";


const UsuarioLogin = () => {

  return (
    <>
      <div className="loginHeroProfileContainer gradient-custom-2 w-100">
        <Container className="loginProfileContainer  h-100 w-100">
          <Row className="loginProfileRow justify-content-center align-items-center h-100">
            <Col className="loginProfileCol" lg="9" xl="7">
              <Card>
                <div className="loginCardContainer text-white d-flex flex-row w-100">
                  <div className="loginImageContainer ms-4 mt-3 d-flex flex-column justify-content-center  align-items-center">
                    <div className="justify-content-center text-center align-items-center">
                      <Image className="loginProfileUserImage"
                        src={userLoginImage}
                        alt="userImage" />
                    </div>
                    <Button className="loginProfileButton align-items-center justify-content-center align-content-center mb-2 p-0" variant="light">
                      Editar datos
                    </Button>
                  </div>
                  <div className="loginDataUser">
                    <h1>Juan Pérez </h1>
                    <p>Buenos Aires (Argentina)</p>
                  </div>
                </div>
                <div className="loginInfoUserContainer p-4 text-black">
                  <div className="d-flex justify-content-end text-center py-1">
                    <div className="px-3">
                      <p className="mb-1 h5">140</p>
                      <p className="small text-muted mb-0">Seguidores</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">240</p>
                      <p className="small text-muted mb-0">Siguiendo</p>
                    </div>
                  </div>
                </div>
                <Card.Body className="loginProfileUserOptionsContainer text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1 fw-bold">Mi perfil</p>
                    <div className="myLoginProfileUserContainer  p-4 link-body-emphasis d-flex flex-column">
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
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                      <ListGroup className="recentActivityList border-1">
                        <ListGroup.Item className="recentActivityListItem d-flex justify-content-between">
                          <p className="fw-normal">juanperez le gustó la reseña ★★★★★ de julilopez of Mission: Impossible – Dead Reckoning Part One</p>
                          <p className="align-content-center d-flex justify-content-end ps-1 w-25">3 días</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="recentActivityListItem d-flex justify-content-between">
                          <p className=" fw-normal">juanperez puntuó Riders ★★½</p>
                          <p className="align-content-center d-flex justify-content-end ps-1 w-25">4 días</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="recentActivityListItem d-flex justify-content-between">
                          <p className="fw-normal">juanperez comentó en su reseña de Oppenheimer</p>
                          <p className="align-content-center d-flex justify-content-end ps-1 w-25">5 días</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="recentActivityListItem d-flex justify-content-between">
                          <p className="fw-normal">juanperez vio y puntuó a Sympathy for the Devil ★★★½ </p>
                          <p className="align-content-center d-flex justify-content-end ps-1 w-25">6 días</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="recentActivityListItem d-flex justify-content-between">
                          <p className="fw-normal">juanperez sigue a nahue-pereyra </p>
                          <p className="align-content-center d-flex justify-content-end ps-1 w-25">1 semana</p>
                        </ListGroup.Item>
                      
                      </ListGroup>
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

export default UsuarioLogin;