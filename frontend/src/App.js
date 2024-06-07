import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import MoviesList from './components/MoviesList';
import FavoritesList from './components/FavoritesList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('home'); // home or favorites
  const [isSearch, setIsSearch] = useState(false); // track search state
  const [searchResultsCount, setSearchResultsCount] = useState(0); // track search results count

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/api/movies`)
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (term) => {
    if (term) {
      axios.get(`${BASE_URL}/api/movies/search?title=${term}`)
        .then(response => {
          setMovies(response.data);
          setIsSearch(true); // set search state to true
          setSearchResultsCount(response.data.length); // update results count
        })
        .catch(error => console.error(error));
    } else {
      axios.get(`${BASE_URL}/api/movies`)
        .then(response => {
          setMovies(response.data);
          setIsSearch(false); // reset search state
          setSearchResultsCount(0); // reset results count
        })
        .catch(error => console.error(error));
    }
  };

  const handleFavorite = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleSetView = (newView) => {
    setView(newView);
    if (newView === 'home') {
      setIsSearch(false); // reset search state
      setSearchResultsCount(0); // reset results count
      // Fetch all movies again when going back to home
      axios.get(`${BASE_URL}/api/movies`)
        .then(response => setMovies(response.data))
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} setView={handleSetView} view={view} />
      <div className='home'>
      {view === 'home' ? (
        <>
          <div className='carousel-container'>
            {!isSearch && <Carousel />}
          </div>
          <h1 className={`sub-heading ${isSearch ? 'search-sub-heading' : ''}`}>{isSearch ? 'Search' : 'Movies'}</h1>
          {isSearch && <h2 className='result-count'>{searchResultsCount} result{searchResultsCount !== 1 ? 's' : ''} found</h2>}
          <MoviesList movies={movies} onFavorite={handleFavorite} />
        </>
      ) : (
        <>
          {/* <h1>
            My Favorites
            <button onClick={() => handleSetView('home')}>Back</button>
          </h1> */}
          <FavoritesList favorites={favorites} onRemoveFavorite={removeFavorite} setView={handleSetView} />
        </>
      )}
      </div>
    </div>
  );
};

export default App;
