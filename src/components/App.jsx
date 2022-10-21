import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import MainPage from './Pages/MainPage/MainPage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import MovieSerch from './MovieSerch/MovieSearch';
import css from './App.module.css';
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

