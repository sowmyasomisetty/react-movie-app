import { Routes, Route, Navigate } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      {/* Redirect "/movie" (without ID) to Home */}
      <Route path="/movie" element={<Navigate to="/" />} />
      {/* Catch invalid URLs */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default App;
