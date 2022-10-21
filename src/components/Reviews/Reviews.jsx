import React, { useEffect, useState } from 'react';
import getFetchRewiewsById from 'api/fetchReviews';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const Reviews = () => {
  const [rewiewsList, setRewiewsList] = useState([]);
  const { movieId } = useParams();

  const getFetchMovieRewiewsById = async () => {
    try {
      const response = await getFetchRewiewsById(movieId);
      setRewiewsList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchMovieRewiewsById();
    // eslint-disable-next-line
  }, []);

  if (rewiewsList.length === 0) {
    return <p>We don t have any rewiews</p>;
  }

  return (
    <ul className={css.reviews}>
      {rewiewsList.map(el => {
        const { id, author, content } = el;
        return (
          <li key={id}>
            <div className={css.cardWrap}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
