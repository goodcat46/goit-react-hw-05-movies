import React from 'react'
// import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import css from './Layout.module.css'
import AppBar from 'components/AppBar/AppBar'

const Layout = props => {
  return (
    <div className={css.layout}>
      <AppBar></AppBar>

      <Outlet/>
    </div>
  )
}

Layout.propTypes = {}

export default Layout