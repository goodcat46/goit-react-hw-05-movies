import React, { useEffect, useState, useRef } from 'react';

import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import getFetchById from 'api/fetchById';

import css from './MovieInfo.module.css';

const MovieInfo = () => {
  const [loadMovieInfo, setLoadMovieInfo] = useState();
  const { movieId } = useParams();

  const location = useLocation();
  const refLocation = useRef(location);
  const backLinkPath = refLocation.current.state?.location ?? '/';

  const getFetchedMovieInfo = async () => {
    try {
      const response = await getFetchById(movieId);
      setLoadMovieInfo(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchedMovieInfo();
    // eslint-disable-next-line
  }, []);

  if (!loadMovieInfo) {
    return <p>Ooops!</p>;
  }

  return (
    <div className={css.movieInfoBox}>
      <Link to={backLinkPath}>Go back</Link>
      <div className={css.mainInfoBox}>
        <div className={css.imgBox}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${loadMovieInfo?.poster_path}`}
            alt="poster"
          />
        </div>

        <div className={css.infoBox}>
          <p className={css.title}>Title</p>
          <p className={css.text}>
            {loadMovieInfo?.title || loadMovieInfo?.name}
          </p>
          <p className={css.title}>Genres</p>
          <p className={css.text}>
            {loadMovieInfo?.genres.map(el => el.name).join(', ')}
          </p>
          <p className={css.title}>Overview</p>
          <p className={css.text}>{loadMovieInfo?.overview}</p>
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

export default MovieInfo;
