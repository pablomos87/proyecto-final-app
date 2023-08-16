import "./CSS/UsuarioLogin.css";
import React from 'react';
import { Container, Row, Col, Card, Button, Image, ListGroup } from "react-bootstrap";
import userLoginImage from "./Images/UsuarioLogin.png"


const UsuarioLogin = () => {

  return (
    <>
      <div className="profilLoginContainer gradient-custom-2 w-100">
        <Container className="py-5 h-100 w-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col lg="9" xl="7">
              <Card>
                <div className="cardLoginContainer rounded-top text-white d-flex flex-row">
                  <div className="imageContainer ms-4 mt-5 d-flex flex-column justify-content-center">
                    <div className="justify-content-center text-center">
                      <Image className="profilUserLoginImage"
                        src={userLoginImage}
                        alt="userImage" />
                    </div>
                    <Button className="profilLoginButton" variant="light" size="sm">
                      Editar mis datos
                    </Button>
                  </div>
                  <div className="dataLoginUsuario ms-3">
                    <h1>Juan Pérez </h1>
                    <p>Buenos Aires (Argentina)</p>
                  </div>
                </div>
                <div className="infoUserLoginContainer p-4 text-black">
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
                <Card.Body className="profilUserOptionsContainer text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1 fw-bold">Mi perfil</p>
                    <div className="myProfilUserContainer  p-4 link-body-emphasis">
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