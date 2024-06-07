import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/tmdb';
import playIcon from '../assets/playIcon.svg';

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [movies.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleDots = () => {
    const totalDots = movies.length;
    const visibleDots = 4;
    const startIndex = (currentIndex + totalDots - 1) % totalDots;

    const dots = [];
    for (let i = 0; i < visibleDots; i++) {
      dots.push((startIndex + i) % totalDots);
    }
    return dots;
  };

  return (
    <div className="carousel-container">
      {movies.length > 0 ? (
        <div className="carousel">
          {movies.map((movie, index) => (
            <div
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              key={index}
              style={{ backgroundImage: `url(${IMAGE_URL}${movie.backdrop_path})` }}
            >
              <div className="carousel-content">
                <h2>{movie.title || movie.name}</h2>
                <p>{movie.overview}</p>
                <button className="watch-trailer-btn">
                  <img src={playIcon} alt="Play icon" className="play-icon" />
                  Watch trailer
                </button>
              </div>
            </div>
          ))}
          <div className="carousel-dots">
            {getVisibleDots().map((index, i) => (
              <div
                key={index}
                className={`carousel-dot ${i === 1 ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Carousel;
