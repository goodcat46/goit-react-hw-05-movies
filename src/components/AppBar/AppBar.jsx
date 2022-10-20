import React from 'react';

import { NavLink } from 'react-router-dom';

import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={css.appBar}>
      <NavLink end to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="movies">
        <div>Movies</div>
      </NavLink>
    </div>
  );
};

export default AppBar;
