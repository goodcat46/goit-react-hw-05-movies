import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import TrendList from 'components/TrendList/TrendList';

import css from './MainPage.module.css';

const MainPage = props => {

  const [loadTrends, setLoadTrends] = useState(true);


  return (
    <div className={css.mainPage}>
      
      <TrendList />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
