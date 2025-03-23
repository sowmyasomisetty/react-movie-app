import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchmovieDetails } from "../api/movieapi/movieapi";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate("/"); // Redirect if no ID is present
      return;
    }

    const getMovieDetails = async () => {
      try {
        const data = await fetchmovieDetails(id);
        if (!data || data.success === false) {
          navigate("/"); // Redirect if movie not found
        }
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id, navigate]);

  if (loading) return <h1>Loading...</h1>;
  if (!movie) return <h1>Movie Not Found!</h1>;

  return (
    <div className="container text-center my-4">
      <h2 className="fw-bold text-danger">{movie?.title}</h2>
      <div className="d-flex justify-content-center">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-detail-img"
        />
      </div>
      <p className="mt-3">{movie.overview}</p>
      <button onClick={() => navigate("/")} className="btn btn-primary">
        Back
      </button>
    </div>
  );
};

export default MovieDetails;
