import fetchMovieApi from './moviesApi';
import { API_KEY } from './API_KEY';

const getFetchSearchMovie = async ( searchQuery ) => {
  const data = await fetchMovieApi.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  return data.data.results;
};

export default getFetchSearchMovie;
