import React, { useState, useEffect } from 'react';
import getFetchTrends from 'api/fetchTrends';
import TrendList from 'components/TrendList/TrendList';

import css from './MainPage.module.css';

const MainPage = () => {
  const [loadTrends, setLoadTrends] = useState();

  const getFetchedTrendsList = async () => {
    try {
      const response = await getFetchTrends();
      setLoadTrends(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchedTrendsList();
  }, []);

  return (
    <div className={css.mainPage}>
      <p className={css.title}>Trends today</p>
      <TrendList trendList={loadTrends} />
    </div>
  );
};


export default MainPage;
