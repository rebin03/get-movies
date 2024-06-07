const movies = require('../movies.json');

const getMovies = (req, res) => {
  res.json(movies);
};

const searchMovies = (req, res) => {
  const { title } = req.query;
  if (!title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().startsWith(title.toLowerCase())
  );
  res.json(filteredMovies);
};

module.exports = {
  getMovies,
  searchMovies
};
