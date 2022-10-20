import axios from 'axios';

const fetchMovieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3' });

export default fetchMovieApi