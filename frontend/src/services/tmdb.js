const API_KEY = 'fe1e92b75c15a6f764210626845caccd';
const BASE_URL = 'https://api.themoviedb.org/3';


export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch trending movies:", error);
    return [];
  }
};
