import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const apiKey = "fb3f4b2ea6a19573459266d8c5836ed1";


  const StarRating = ({ rating }) => {
    const starsTotal = 5;
    const filledStars = Math.round(rating / 2);

    return (
      <div className="star-rating">
        {[...Array(starsTotal)].map((_, index) => {
          return (
            <span
              key={index}
              className={index < filledStars ? "filled" : "empty"}
            >
              &#9733; 
            </span>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setMovie(movieResponse.data);

        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        const trailerVideo = videoResponse.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setTrailer(trailerVideo);
      } catch (error) {
        console.error("Error fetching movie details: ", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
    width: '100%',
    position: 'relative',
    color: 'white',
    textShadow: '1px 1px 2px black'
  };

  return (
    <div style={backgroundImageStyle} className="background-container">
      <div className="overlay"></div>
      <div className="movie-details">
        <h1>{movie.title}</h1>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>
          <StarRating rating={movie.vote_average} />
        </p>
        {trailer && (
          <div className="trailer">
            <h2>Trailer</h2>
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
