import React from 'react';
import PropTypes from 'prop-types';
import css from './Reviews.module.css';

const Reviews = props => {
  return (
    <div className={css.reviews}>
      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
      </ul>
    </div>
  );
};

Reviews.propTypes = {};

export default Reviews;
