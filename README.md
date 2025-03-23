Movie App 🎬  

A React-based movie app that displays popular movies, allows users to search for movies, and view movie details. The app fetches data from **The Movie Database (TMDB) API**.  

🚀 Features  
    ✅ Fetch and display **popular movies**  
    ✅ **Search** for movies by title  
    ✅ View **movie details** (title, poster, rating, and overview)  
    ✅ Responsive design with **Bootstrap styling**  
    ✅ Smooth navigation using **React Router**  



📂 Project Structure  

    📦 movie-app
    ├── 📂 public
    ├── 📂 src
    │ ├── 📂 api/movieapi
    │ │ ├── movieapi.js # API fetch functions
    │ ├── 📂 components
    │ │ ├── MovieList.jsx # Home page displaying movies
    │ │ ├── MovieDetails.jsx # Movie details page
    │ │ ├── SearchBar.jsx # Search component
    │ ├── App.jsx # App Routes
    │ ├── index.css # Global styles
    │ ├── main.jsx # React entry file
    ├── package.json
    ├── README.md


🎥 API Usage
This project uses TMDB API. You need an API key from TMDB to fetch movie data.

    1️⃣ Get your API Key from TMDB
    2️⃣ Replace the API key in src/api/movieapi/movieapi.js:

        let API_KEY = "YOUR_API_KEY_HERE";

📌 Technologies Used
    React (Component-based UI)
    React Router (Navigation)
    Bootstrap (Styling)
    TMDB API (Movie Data)