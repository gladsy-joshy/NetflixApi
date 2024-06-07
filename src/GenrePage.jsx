import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./GenrePage.css";

const GenrePage = () => {
  const { genreId, genreName } = useParams();
  const [genreMovies, setGenreMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const apiKey = "fb3f4b2ea6a19573459266d8c5836ed1";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
          {
            params: {
              api_key: apiKey,
              with_genres: genreId,
            },
          }
        );

        const filteredMovies = response.data.results.filter((movie) =>
          movie.genre_ids.includes(parseInt(genreId))
        );
        setGenreMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovies();
  }, [genreId, apiKey]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const filteredMovies = genreMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="genre-page">
      <div className="header">
        <h1 className="genreheadingname">{genreName}</h1>
        <FaSearch className="search-icon" onClick={toggleSearchBar} />
        {showSearchBar && (
          <Form className="search-bar">
            <FormControl
              type="text"
              placeholder="Type movie name here...."
              className="mr-sm-2"
              value={searchQuery}
              onChange={handleSearch}
            />
          </Form>
        )}
      </div>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Card
              className="cardadjust"
              style={{ width: "9rem", height: "16.95rem" }}
            >
              <div className="cardphoto">
                <Card.Img
                  variant="top"
                  style={{
                    width: "280px",
                    height: "270.99px",
                    borderRadius: "10px",
                  }}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
