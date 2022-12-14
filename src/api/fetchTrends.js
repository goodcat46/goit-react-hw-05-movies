import fetchMovieApi from './moviesApi';
import { API_KEY } from './API_KEY';

const getFetchTrends = async () => {
  const data = await fetchMovieApi.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data.data.results;
};

export default getFetchTrends;