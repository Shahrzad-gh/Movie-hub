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
