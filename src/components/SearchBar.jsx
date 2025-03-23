import React, { useState } from "react";
import { searchMovies } from "../api/movieapi/movieapi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await searchMovies(query);
      onSearch(res);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex justify-content-between">
      <input 
        type="text" 
        className="form-control" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit" className="btn btn-danger">Search</button>
    </form>
  );
};

export default SearchBar;
