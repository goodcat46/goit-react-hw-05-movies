import { Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout/Layout';
import MainPage from './Pages/MainPage/MainPage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from './Pages/NotFound/NotFoundPage';

import css from './App.module.css';
// import Rewiews

export const App = () => {
  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tranding" element={<MainPage />}></Route>
          <Route path="movies" element={<MoviesPage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Route >
      </Routes>
    </div>
  );
};
// todo '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// todo '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// todo '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// todo /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// todo /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

// todo /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// todo /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// todo /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// todo /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// todo /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
