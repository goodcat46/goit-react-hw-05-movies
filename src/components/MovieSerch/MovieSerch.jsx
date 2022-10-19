import React from 'react';
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import css from './MovieSerch.module.css';

const MovieSerch = () => {
  const [serchQuery, setSerchQuery] = useState('');
  function handleSerchInputChange(evt) {
    let {
      target: { value },
    } = evt;
    setSerchQuery(value.trim());
    console.log(value);
  }
  function handleSubmitSerch(evt) {
    evt.preventDefault();

    console.log(serchQuery);
  }
  return (
    <form
      onSubmit={evt => {
        handleSubmitSerch(evt);
      }}
    >
      <input
        className={css.movieSerch}
        type="text"
        name="movie"
        id="movie"
        value={serchQuery}
        placeholder="Movie name ..."
        required
        onChange={evt => {
          handleSerchInputChange(evt);
        }}
      />
      <button className={css.button} type="submit">
        Serch
      </button>
    </form>
  );
};

MovieSerch.propTypes = {};

export default MovieSerch;
