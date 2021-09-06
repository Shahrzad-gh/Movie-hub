import { searchConstants } from "../actions/Types";

const initState = {
  movies: [],
  tvs: [],
  trending: [],
  videoDetails: {},
  genres: [],
  moviesGenre: [],
  credits: {},
  people: {},
  reviews: [],
  reviewDetails: {},
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
        moviesGenre: {
          ...state.moviesGenre,
          [action.payload.id]: action.payload.movies,
        },
      });
    case searchConstants.FETCH_CREDITS_SUCCESS:
      return (state = {
        ...state,
        credits: action.payload,
      });
    case searchConstants.FETCH_PEOPLE_SUCCESS:
      return (state = {
        ...state,
        people: { ...state.people, [action.payload.id]: action.payload },
      });
    case searchConstants.FETCH_REVIEWS_SUCCESS:
      return (state = {
        ...state,
        reviews: action.payload,
      });
    default:
      return state;
  }
};
