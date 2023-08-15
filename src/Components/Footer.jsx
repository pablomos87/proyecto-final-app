import "./CSS/Footer.css";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
    <footer className="footerContainer">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <h5 className="textTitleFooter">Información de contacto</h5>
            <p className="textFooter">Correo: info@moviesreviewhub.com</p>
          </Col>
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <h5 className="textTitleFooter">Enlaces útiles</h5>
            <Nav className="flex-column ">
              <Nav.Link href="/nosotros"  className="listFooter text-white text-decoration-underline">Nosotros</Nav.Link>
              <Nav.Link href="/servicios"  className="listFooter text-white text-decoration-underline">Servicios</Nav.Link>
              <Nav.Link href="/contacto"  className="listFooter text-white text-decoration-underline">Contacto</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5 className="textTitleFooter">Síguenos en redes sociales</h5>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/miproyecto" className="me-3">
                <FaFacebook size="2.5vw" color="white" />
              </a>
              <a href="https://www.twitter.com/miproyecto" className="me-3">
                <FaTwitter size="2.5vw" color="white" />
              </a>
              <a href="https://www.instagram.com/miproyecto">
                <FaInstagram size="2.5vw" color="white" />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="mt-4" />
        <p className="textFooter text-center">
          © {new Date().getFullYear()} MoviesReviewHub. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
