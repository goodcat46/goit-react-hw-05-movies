import React from 'react';
// import PropTypes from 'prop-types';
import css from './Cast.module.css';

const Cast = props => {
  return (
      <ul className={css.cast}>
        <li>Cast 1</li>
        <li>Cast 2</li>
      </ul>

  );
};

Cast.propTypes = {};

export default Cast;
