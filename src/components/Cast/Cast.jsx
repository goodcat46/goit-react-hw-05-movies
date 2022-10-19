import React from 'react';
import PropTypes from 'prop-types';
import css from './Cast.module.css';

const Cast = props => {
  return (
    <div className={css.cast}>
      <ul>
        <li>Cast 1</li>
        <li>Cast 2</li>
      </ul>
    </div>
  );
};

Cast.propTypes = {};

export default Cast;
