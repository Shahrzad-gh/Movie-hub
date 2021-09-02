import { searchConstants } from "../actions/Types";

const initState = {
  movies: [],
  tvs: [],
  trending: [],
  videoDetails: {},
  genres: [],
  moviesGenre: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case searchConstants.FETCH_POPULAR_MOVIE_SUCCESS:
      return (state = {
        ...state,
        movies: action.payload,
      });
    case searchConstants.FETCH_POPULAR_TV_SUCCESS:
      return (state = {
        ...state,
        tvs: action.payload,
      });
    case searchConstants.FETCH_TRENDING_SUCCESS:
      return (state = {
        ...state,
        trending: action.payload,
      });
    case searchConstants.FETCH_TRAILER_SUCCESS:
      return (state = {
        ...state,
        videoDetails: action.payload,
      });
    case searchConstants.FETCH_GENRE_SUCCESS:
      return (state = {
        ...state,
        genres: action.payload.genres,
      });
    case searchConstants.FETCH_MOVIE_GENRE_SUCCESS:
      return (state = {
        ...state,
        //moviesGenre: action.payload,
        moviesGenre: {
          ...state.moviesGenre,
          [action.payload.id]: action.payload.movies,
        },
      });
    default:
      return state;
  }
};
