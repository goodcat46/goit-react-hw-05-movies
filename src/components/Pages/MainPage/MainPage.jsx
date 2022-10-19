import React from 'react';
import PropTypes from 'prop-types';
import MovieSerch from 'components/MovieSerch/MovieSerch';
import TrendList from 'components/TrendList/TrendList';

import css from './MainPage.module.css';

const MainPage = props => {
  return (
    <div className={css.mainPage}>
      <MovieSerch />
      <TrendList />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
