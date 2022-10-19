import React from 'react';
// import PropTypes from 'prop-types';
import { Outlet, NavLink } from 'react-router-dom';
import Button from 'components/Button/Button';
import MovieSerch from 'components/MovieSerch/MovieSerch';
import MovieInfo from '../../MovieInfo/MovieInfo';

import css from './MoviesPage.module.css';

const MoviesPage = props => {
  return (
    <div className={css.moviesPage}>
      <Button btnName="< Go Back" />
      <MovieSerch />
      <MovieInfo />
    </div>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
