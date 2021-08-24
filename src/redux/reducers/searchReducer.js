import {searchConstants} from "../actions/Types"

const initState = {
  popular: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case searchConstants.FETCH_POPULAR_SUCCESS:
      return state= {
        ...state,
        popular: action.payload,
      } 
    default:
      return state
  }
}



