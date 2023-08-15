import React from 'react';
import "./CSS/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reviews from "./data"
import photo from "./Images/home-photo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <main>
            <section className="heroSection">
                <div className="mainBannerContainer">
                    <div className="featuredImageContainer">
                        <img
                            src={photo}
                            alt="foto-portada"/>
                        <div className="imageTextContainer">
                            <h1 className=" fw-bold text-light">
                                Sigue las películas que viste  <br />
                                Guarda las que quieras ver  <br />
                                Comparte tus experiencias con la comunidad <br />
                            </h1>
                            <p className=" fw-bold">La red social para los amantes del cine</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featuresSection">
                <div className="featureTitle">
                    <h2> MoviesReviewHub te permite...</h2>
                </div>
                <div className="featuresContainer">
                    <div className="rowFeaturesContainer row">
                        <div className="feature">
                            <p>Lleva un registro de cada película que hayas visto.</p>
                        </div>
                        <div className="feature">
                            <p>Muestra tu amor por tus películas favoritas, listas y reseñas con un "me gusta".</p>
                        </div>
                        <div className="feature">
                            <p>Escribe y comparte reseñas, y sigue a amigos y otros miembros para leer las suyas.</p>
                        </div>
                        <div className="feature">
                            <p>Evalúa cada película en una escala de cinco estrellas para registrar y compartir tu experiencia.</p>
                        </div>
                        <div className="feature">
                            <p> Lleva un diario de tus películas vistas y consulta estadísticas completas.
                            </p>
                        </div>
                        <div className="feature">
                            <p>Compila y comparte listas de películas sobre cualquier tema y mantén una lista de películas por ver.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recentReviewsContainer">

                <div className="recentReviewsTitle">
                    <h4> ULTIMAS RESEÑAS</h4>
                </div>

                <div className="reviews">
    {reviews.map((review, index) => (
        <div className="reviewsContainer" key={index}>
            <div className="imageReviewContainer">
                <img
                    src={review.image}
                    alt="Movies" />
                <div className="textReviewContainer">
                    <h5>{review.name}</h5>
                    <div className="userReviewContainer">
                        <i className="userReviewIcon"><FontAwesomeIcon icon={faUser} /></i>
                        {review.user}
                    </div>
                    <p>{review.rank} {review.review}</p>
                </div>
            </div>
        </div>
    ))}
</div>
    </section>
    </main >
    );
};

export default Home;