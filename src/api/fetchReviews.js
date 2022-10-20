import fetchMovieApi from './moviesApi';
import { API_KEY } from './API_KEY';

const getFetchRewiewsById = async (movieId) => {
  const data = await fetchMovieApi.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return  data.data.results;
};

export default getFetchRewiewsById;