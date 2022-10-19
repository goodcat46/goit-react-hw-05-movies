import React from 'react';
// import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom';
import css from './MovieInfo.module.css';

const MovieInfo = props => {
  return (
    <div className={css.movieInfoBox}>
      <div className={css.mainInfoBox}>
        <div className={css.imgBox}>
          <img
            src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/rocky-main-poster-i119986.jpg"
            alt="poster"
          />
        </div>
        <div className={css.infoBox}>
          <p className={css.title}>Title</p>
          <p className={css.text}>Text</p>
          <p className={css.title}>Title</p>
          <p className={css.text}>Text</p>
          <p className={css.title}>Title</p>
          <p className={css.text}>Text</p>
          <p className={css.title}>Description</p>
          <p className={css.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quod
            voluptatibus similique facere illo consequatur minima, maxime
            blanditiis a voluptatum et beatae facilis consequuntur reiciendis
            minus officiis sit corporis ipsam.
          </p>
        </div>
      </div>
      <div className={css.navBox}>
        <nav className={css.navigate}>
          <NavLink to="cast">
            <span>Cast</span>
          </NavLink>
          <NavLink to="reviews">
            <span>Reviews</span>
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

MovieInfo.propTypes = {};

export default MovieInfo;
