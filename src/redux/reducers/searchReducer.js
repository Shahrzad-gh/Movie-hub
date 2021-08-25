import {searchConstants} from "../actions/Types"

const initState = {
  popular: {
    movies : [],
    tvs : []
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case searchConstants.FETCH_POPULAR_MOVIE_SUCCESS:
       return state = {
        ...state,
        popular: {movies: action.payload}
      }
      case searchConstants.FETCH_POPULAR_TV_SUCCESS:
      return state = {
          ...state,
          popular: {tvs: action.payload}
        }
    default:
      return state
  }
}



