import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, NavLink } from 'react-router-dom';

import css from './MoviesPage.module.css';

const MoviesPage = props => {
  return (
    <div className={css.moviesPage}>
      <div className={css.movieBox}>
        <div className={css.imgBox}>
          <img
            src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/rocky-main-poster-i119986.jpg"
            alt="poster"
          />
        </div>
        <div className={css.infoBox}>
          <p className={css.title}>Title</p>
          <p className={css.text}>Text</p>
          <p className={css.text}>Text</p>
          <p className={css.decription}>Description</p>
        </div>
      </div>
      <nav className={css.navigate}>
        <NavLink to="cast">
          <span>Cast</span>
        </NavLink>
        <NavLink to="reviews">
          <span>Reviews</span>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;