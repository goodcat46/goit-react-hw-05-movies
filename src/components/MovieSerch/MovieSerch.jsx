import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import MoviesSearchList from './MoviesSearchList/MoviesSearchList';
import getFetchSearchMovie from 'api/fetchSearchMovie';
import css from './MovieSerch.module.css';

const MovieSerch = () => {
  const [fondMovies, setFondMovies] = useState();
  const [showList, setShowList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = searchParams.get('query') ?? '';
  const location = useLocation();

  function handleSerchInputChange(evt) {
    let {
      target: { value },
    } = evt;

    setSearchParams(value.trim() !== '' ? { query: value.trim() } : {});
  }
  function handleSubmitSerch(evt) {
    evt.preventDefault();
    setShowList(true);
    setSearchQuery(searchInput);
  }
  const getFetchFoundMovies = async searchQuery => {
    try {
      const response = await getFetchSearchMovie(searchQuery);
      console.log('==========', response);

      setFondMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    getFetchFoundMovies(searchQuery);
  }, [searchQuery]);


  return (
    <>
      <form
        className={css.form}
        onSubmit={evt => {
          handleSubmitSerch(evt);
        }}
      >
        <input
          className={css.movieSerch}
          type="text"
          name="searchInput"
          id="movie"
          value={searchInput}
          placeholder="Movie name ..."
          required
          onChange={evt => {
            handleSerchInputChange(evt);
          }}
        />
        <button className={css.button} type="submit">
          Serch
        </button>
      </form>

      {!showList && <p>Let's go find some movies for you.</p>}

      {showList && <MoviesSearchList moviesList={fondMovies} location={location} />}
    </>
  );
};

export default MovieSerch;
