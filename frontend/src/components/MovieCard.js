import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie, onFavorite }) => {
  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={movie.banner_image} alt={`${movie.title} banner`} className="banner-image" />
        <button className="favorite-btn" onClick={() => onFavorite(movie)}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <p className="year">{movie.year}</p>
      <h3 className="title">{movie.title}</h3>
      <p className="genre">{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
