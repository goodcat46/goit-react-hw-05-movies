import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import css from './AppBar.module.css';

const AppBar = props => {
  return (
    <div className={css.appBar}>
      {' '}

      <NavLink to='tranding'><div>Home</div></NavLink>
      <NavLink to='movies'><div>Movies</div></NavLink>

    </div>
  );
};

AppBar.propTypes = {};

export default AppBar;
