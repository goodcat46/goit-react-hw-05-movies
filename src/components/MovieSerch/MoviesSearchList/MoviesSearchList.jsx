import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from './MoviesSearchList.module.css';

const MoviesSearchList = ({ moviesList }) => {
  const location = useLocation()

  if (!moviesList || moviesList.length === 0) {
    return <p>Not founded movies on your request</p>;
  }

  return (
    <>
      <p>We founded {moviesList.length} movies for you.</p>
      <ul className={css.list}>
        {moviesList.map(({ id, name, title }) => {
          return (
            <li key={id} className={css.item}>
              <Link to={`/movies/${id}`} state={{ location }}>
                {name || title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

MoviesSearchList.propTypes = {
  moviesList: PropTypes.array,
};

export default MoviesSearchList;
