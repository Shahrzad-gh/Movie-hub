import { searchConstants } from './Types'
import axios from "axios";

const APIKEY = "APIKEY"

export const fetchPopular = () => {
  return async (dispatch) => {
    console.log(APIKEY)
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`)
      console.log(res)
      dispatch({
        type: searchConstants.FETCH_POPULAR_SUCCESS,
        payload: res.data.results
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: searchConstants.FETCH_POPULAR_FAILURE,
      })
    }
  }
}
