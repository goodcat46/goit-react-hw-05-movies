import fetchMovieApi from './moviesApi';
import { API_KEY } from './API_KEY';

const getFetchCastById = async (movieId) => {
  const data = await fetchMovieApi.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.cast;
};

export default getFetchCastById;