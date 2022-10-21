import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './TrendList.module.css';

const TrendList = ({ trendList = [] }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {trendList.map(({ id, name, title }) => {
        return (
          <li key={id} className={css.item}>
            <Link to={`/movies/${id}`} state={{ location }}>
              {name || title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendList;
