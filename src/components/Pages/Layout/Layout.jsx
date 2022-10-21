import React from 'react';
import css from './Layout.module.css';
import PropTypes from 'prop-types';
import AppBar from 'components/AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar></AppBar>
      {children}
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Layout;
