import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./CSS/Peliculas.css" 


const API_KEY = process.env.REACT_APP_PASSWORD;
const BASE_URL =  process.env.REACT_APP_BASE_URL;

const Peliculas = () => {
    
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
          .then(response => response.json())
          .then (data => {
            console.log(data.results);
            setMovies(data.results);}
    )}, []   );
  

        useEffect(() => {
            fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
              .then(response => response.json())
              .then (data => {
                console.log(data.results);
                setPopularMovies(data.results);}
        )}, []   );


        useEffect(() => {
            fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
              .then(response => response.json())
              .then (data => {
                console.log(data.results);
                setUpcomingMovies(data.results);}
        )}, []   );

        useEffect(() => {
            fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
              .then(response => response.json())
              .then (data => {
                console.log(data.results);
                setNowPlayingMovies(data.results);}
        )}, []   );

    const chunkArray = (arr, size) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
    };

    const chunkedPopularMovies = chunkArray(popularMovies, 4);
    const chunkedUpcomingMovies = chunkArray(upcomingMovies, 4);
    const chunkedNowPlayingMovies = chunkArray(nowPlayingMovies, 4);
    const chunkedMovies = chunkArray(movies, 4);

    return (
        <>

        
      <div className="peliculasTitleContainer d-flex flex-column justify-content-center align-items-left container-fluid ">
        <h1 className="display-6  fw-bold pb-0">PELICULAS</h1>
        <p className="col-md-8 fw-normal"> Selecciona la películas que quieras</p>
      </div>

        <div className="peliculasContainer">

            <Carousel className="carouselContainer">
            <h2> MÁS POPULARES</h2>
                {chunkedPopularMovies.map((moviesGroup, index) => (
                    <Carousel.Item className="carouselItem" key={index}>
                        <div className="itemsContainer">
                            {moviesGroup.map((movie) => (
                                <div className="image" key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                   
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            
            <Carousel className="carouselContainer">
            <h2>PRÓXIMOS ESTRENOS</h2>
                {chunkedUpcomingMovies.map((moviesGroup, index)  => (
                    <Carousel.Item className="carouselItem" key={index}>
                        <div className="itemsContainer">
                            {moviesGroup.map((movie) => (
                                <div className="image" key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

        
            <Carousel className="carouselContainer">
            <h2>EN CARTELERA DE CINE</h2>
                {chunkedNowPlayingMovies.map((moviesGroup, index) => (
                    <Carousel.Item className="carouselItem" key={index}>
                        <div className="itemsContainer">
                            {moviesGroup.map((movie) => (
                                <div className="image" key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            
            <Carousel className="carouselContainer">
            <h2>RECOMENDACIONES</h2>
                {chunkedMovies.map((moviesGroup, index) => (
                    <Carousel.Item className="carouselItem" key={index}>
                        <div className="itemsContainer">
                            {moviesGroup.map((movie) => (
                                <div className="image" key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                   
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
        </>
    );
};

export default Peliculas;