import './App.css';
import AllMovies from './Pages/AllMovies';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetails from './Pages/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState({});

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.tvmaze.com/search/shows?q=all'
      );
      //   console.log(response?.data);
      setMoviesData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieDetails = (item) => {
    setMoviesDetails(item);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AllMovies
                moviesData={moviesData}
                getMovieDetails={getMovieDetails}
              />
            }
          ></Route>
          <Route
            path="/movie-details"
            element={<MovieDetails moviesDetails={moviesDetails} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
