import React from 'react'
import PropTypes from 'prop-types'

import css from './Button.module.css'


const Button = ({btnName}) => {
  return (
    <div className={css.button}>{btnName}</div>
  )
}

Button.propTypes = {
  btnName: PropTypes.string
}

export default Button