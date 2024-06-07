import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const FavoritesList = ({ favorites, onRemoveFavorite, setView }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFavorites = favorites.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <div className="favorites-header">
        <div className="left-container">
          <button className="back-button" onClick={() => setView('home')}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <h1 className="sub-heading">My Favorites</h1>
        </div>
        <div className="favorites-search-container">
          <FontAwesomeIcon icon={faSearch} className="fa-search" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search from favourites"
          />
          {searchTerm && (
            <FontAwesomeIcon
              icon={faTimes}
              className="fa-times"
              onClick={clearSearch}
            />
          )}
        </div>
      </div>
      <div className="favorites-list">
        {filteredFavorites.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavorite={() => onRemoveFavorite(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
