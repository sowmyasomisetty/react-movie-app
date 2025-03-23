import React, { useEffect, useState } from "react";
import { fetchmovies } from "../api/movieapi/movieapi";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchmovies();
        setMovies(data || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container my-2">
      <div className="p-2">
        <SearchBar onSearch={setMovies} />
      </div>
      <h4 className="fs-3 fw-bold text-danger">Popular Movies</h4>
      
      <div className="row">
        {movies.slice(0, 9).map((movie) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={movie.id}>
            <div className="card shadow h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                className="card-img-top"
                alt={movie.title}
                height="250"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie?.title}</h5>
                <p className="card-text">⭐ {movie?.vote_average}</p>
                {/* View Details Button */}
                <button 
                  className="btn btn-primary mt-auto"
                  onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
