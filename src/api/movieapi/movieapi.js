let API_KEY = "93a8ac036bd0b605a79f8dbbb6cfda36";
let baseUrl = `https://api.themoviedb.org/3`;

export const fetchmovies = async (type = "popular") => {
  try {
    let res = await fetch(`${baseUrl}/movie/${type}?api_key=${API_KEY}`);
    let data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchmovieDetails = async (id) => {
  if (!id) return null;
  try {
    let res = await fetch(`${baseUrl}/movie/${id}?api_key=${API_KEY}`);
    let data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const searchMovies = async (query) => {
  try {
    let res = await fetch(`${baseUrl}/search/movie?query=${query}&api_key=${API_KEY}`);
    let data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
};
