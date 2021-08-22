import { searchConstants } from './Types'
import axios from "axios";

export const fetchPopular = (dispatch) => {
  return async (dispach) => {
    try {
      const res = await axios.get(``)
      dispach({
        type: searchConstants.FETCH_POPULAR_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      console.log(error)
      dispach({
        type: searchConstants.FETCH_POPULAR_FAILURE,
      })
    }
  }
}