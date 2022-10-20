import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import MainPage from './Pages/MainPage/MainPage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import NotFoundPage from './Pages/NotFound/NotFoundPage';
import MovieSerch from './MovieSerch/MovieSerch';
import css from './App.module.css';
// const MovieSerch = lazy(() => import('./MovieSerch/MovieSerch'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('./Pages/NotFound/NotFoundPage'));

export const App = () => {
  return (
    <div className={css.app}>
      <Layout>
        <Routes>
          <Route index element={<MainPage />}></Route>

          <Route path="movies" element={<MoviesPage />}>
            <Route index element={<MovieSerch />}></Route>

            <Route
              path=":movieId"
              element={
                <Suspense fallback={<p>'Loading... Please wait ='</p>}>
                  <MovieInfo />
                </Suspense>
              }
            >
              <Route
                path="cast"
                element={
                  <Suspense fallback={<p>'Loading... Please wait ='</p>}>
                    <Cast />
                  </Suspense>
                }
              ></Route>

              <Route
                path="reviews"
                element={
                  <Suspense fallback={<p>'Loading... Please wait ='</p>}>
                    <Reviews />
                  </Suspense>
                }
              ></Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<p>'Loading... Please wait ='</p>}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
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
