import React from 'react';
// import PropTypes from 'prop-types'
import css from './Layout.module.css';
import AppBar from 'components/AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar></AppBar>
      {children}
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
