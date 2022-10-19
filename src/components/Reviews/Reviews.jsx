import React from 'react';
// import PropTypes from 'prop-types';
import css from './Reviews.module.css';

const Reviews = props => {
  return (
      <ul className={css.reviews}>
        <li>Review 1</li>
        <li>Review 2</li>
      </ul>

  );
};

Reviews.propTypes = {};

export default Reviews;
