import React, { useState, useEffect } from "react";
import "./CSS/Ranking.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { Image, Row, Col } from "react-bootstrap";


const API_KEY = process.env.React_App_Password;
const BASE_URL = process.env.React_App_Base_URL;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


const Ranking = () => {
  const [ratedMovies, setRatedMovies] = useState([]);

  useEffect(() => {
      fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
        .then(response => response.json())
        .then (data => {
          console.log(data.results);
          setRatedMovies(data.results);}
  )}, []   );


  return (
    
    <>


      <div className="rankingTitleContainer container-fluid d-flex flex-column justify-content-center align-items-left">
        <h1 className="display-6 fw-bold  pb-0">RANKING</h1>
        <p className="col-md-8 fw-normal"> Las películas más votadas por los usuarios </p>
      </div>
      
      
    <div className="rankingContainer d-flex justify-content-center align-items-center ">
    <div className="rankingListContainer">
      <Row className="rowContainer justify-content-center align-items-center">
        {ratedMovies.map((movie, index) => (
          <Col key={movie.id} xs={12} md={6} lg={4} className="w-100 align-items-center">
            <ListGroup className="rankingListMovieGroup justify-content-center align-items-center">
              
                <Row className= "movieListRow">
                  <Col xs={4} className="colImgContainer">
                    <Image
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt={`{movie.title}`}
                      className="movieImg align-items-center "
                    />
                  </Col>
                  <Col className= "colTextContainer align-items-center align-content-center text-align-center w-50 ">
                  <ListGroup.Item className="movie-title align-items-center align-content-center border-0  fw-bold">
                    <span className="movie-number border-0">{index + 1}. </span>
                    {movie.title} </ListGroup.Item>
                    <ListGroup.Item className= "border-0">({movie.release_date})</ListGroup.Item>
                    <ListGroup.Item className= "border-0">Puntaje: {movie.vote_average}</ListGroup.Item>
                    <ListGroup.Item>Votos: {movie.vote_count}</ListGroup.Item>
                  </Col>
                </Row>
              
            </ListGroup>
          </Col>
        ))}
      </Row>
    </div>
    </div>
    </>
  );
};

export default Ranking;