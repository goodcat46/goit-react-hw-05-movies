import React, { useEffect, useState } from 'react';
import getFetchCastById from 'api/fetchCast';
import placeholderImg from '../../img/placeholderImg.webp';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  const getFetchMovieCastById = async () => {
    try {
      const response = await getFetchCastById(movieId);
      setCastList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchMovieCastById();
    // eslint-disable-next-line
  }, []);

  if (castList.length === 0) {
    return <p>No casts for this movie</p>;
  }
  return (
    <ul className={css.cast}>
      {castList.map(el => {
        const { id, name, character, profile_path } = el;
        return (
          <li key={id}>
            <div className={css.cardWrap}>
              <div className={css.imgWrap}>
                <img
                  className={css.img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : placeholderImg
                  }
                  alt="portrait"
                />
              </div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
