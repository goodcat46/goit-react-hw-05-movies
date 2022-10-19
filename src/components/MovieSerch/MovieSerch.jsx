import React from 'react';
// import PropTypes from 'prop-types';

import css from './MovieSerch.module.css'

const MovieSerch = props => {
  return (
    <div>
      <form>
        <input className={css.movieSerch} type="text" name="movie" id="movie" required  placeholder='Movie name ...'/>
        <button className={css.button} type='submit'>Serch</button>
      </form>
    </div>
  );
};

MovieSerch.propTypes = {};

export default MovieSerch;
