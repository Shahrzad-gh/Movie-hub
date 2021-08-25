import {searchConstants} from "../actions/Types"

const initState = {
    movies : [],
    tvs : []
}

export default (state = initState, action) => {
  switch (action.type) {
    case searchConstants.FETCH_POPULAR_MOVIE_SUCCESS:
       return state = {
        ...state,
       movies: action.payload
      }
      case searchConstants.FETCH_POPULAR_TV_SUCCESS:
      return state = {
          ...state,
          tvs: action.payload
        }
    default:
      return state
  }
}



