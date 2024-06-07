const express = require('express');
const { getMovies, searchMovies } = require('../controllers/moviesController');
const router = express.Router();

router.get('/', getMovies);
router.get('/search', searchMovies);

module.exports = router;
