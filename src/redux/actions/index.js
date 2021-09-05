import { searchConstants } from "./Types";
import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;

export const fetchPopularMovie = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`
      );
      dispatch({
        type: searchConstants.FETCH_POPULAR_MOVIE_SUCCESS,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: searchConstants.FETCH_POPULAR_MOVIE_FAILURE,
      });
    }
  };
};

export const fetchPopularTv = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}`
      );
      dispatch({
        type: searchConstants.FETCH_POPULAR_TV_SUCCESS,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: searchConstants.FETCH_POPULAR_TV_FAILURE,
      });
    }
  };
};

export const fetchTrendings = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`
      );
      dispatch({
        type: searchConstants.FETCH_TRENDING_SUCCESS,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: searchConstants.FETCH_TRENDING_FAILURE,
      });
    }
  };
};

export const fetchTrailer = (data) => {
  const { id } = data.params;
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}`
      );
      dispatch({
        type: searchConstants.FETCH_TRAILER_SUCCESS,
        payload: res.data.results[0],
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGenres = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`
      );
      dispatch({
        type: searchConstants.FETCH_GENRE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMovieGenre = (data) => {
  const { id } = data.params;
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${id}`
      );
      dispatch({
        type: searchConstants.FETCH_MOVIE_GENRE_SUCCESS,
        payload: { movies: res.data.results, id },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//

export const fetchCredits = (data) => {
  const { id, cat } = data.params;
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${cat}/${id}/credits?api_key=${APIKEY}`
      );
      dispatch({
        type: searchConstants.FETCH_CREDITS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCastInfo = (data) => {
  const { id } = data.params;
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}`
      );
      dispatch({
        type: searchConstants.FETCH_PEOPLE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
