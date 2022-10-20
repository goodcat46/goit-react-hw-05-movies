import React from 'react';
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <div className={css.moviesPage}>
      <Outlet />
    </div>
  );
};

export default MoviesPage;
