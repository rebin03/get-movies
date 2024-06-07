import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.svg';

const Navbar = ({ onSearch, setView, view }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    onSearch(term);
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch(''); // Clear search results
  };

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" onClick={() => setView('home')} />
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => handleSearch(e.target.value)} 
          placeholder="Search movies and series"
        />
        {searchTerm && (
          <button onClick={clearSearch} className="clear-btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>
      {view !== 'favorites' && (
        <button className="favorites-btn" onClick={() => setView('favorites')}>
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          My Favorites
        </button>
      )}
    </nav>
  );
};

export default Navbar;
