import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import MoviesSearchList from './MoviesSearchList/MoviesSearchList';
import getFetchSearchMovie from 'api/fetchSearchMovie';

import css from './MovieSearch.module.css';

const MovieSerch = () => {
  const [foundMovies, setfoundMovies] = useState();
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
    setSearchQuery(searchInput);
  }
  const getFetchFoundMovies = async searchQuery => {
    try {
      const response = await getFetchSearchMovie(searchQuery);
      setfoundMovies(response);
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

  useEffect(() => {
    const locationSearch = window.location.search.split('=');

    if (locationSearch[0] === '?query' && locationSearch[1].length) {
      setSearchQuery(locationSearch[1]);
    }
  }, []);

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
          Search
        </button>
      </form>
      {!!foundMovies?.length ? (
        <MoviesSearchList moviesList={foundMovies} location={location} />
      ) : (
        <p>Let's go find some movies for you.</p>
      )}
    </>
  );
};

export default MovieSerch;
