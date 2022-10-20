import fetchMovieApi from './moviesApi';
import { API_KEY } from './API_KEY';

const getFetchById = async movieId => {
  const data = await fetchMovieApi.get(`/movie/${movieId}`, {
    params: {
      movie_id: movieId,
      api_key: API_KEY,
    },
  });
  return data.data;
};

export default getFetchById;
