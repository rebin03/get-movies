import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ movies, onFavorite }) => {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default MoviesList;
