import axios from "axios"
import data from '../data'

// This action creator is used to fetch data. I didn't get any API in the requirements. So I import a data file instead of it.
export const fetch = () =>
  dispatch => {
    dispatch({
      type: "FETCH",
      payload: data
    })
  }

// Just in case. I'll show the http call solution too.
// export const fetch = () =>
//   function(dispatch) {
//     axios.get("https://jsonsample.com/netflix")
//       .then(response => {
//         dispatch({
//           type: "FETCH",
//           payload: response.data
//         })
//       })
//       .catch(err => {
//         dispatch({
//           type: "FETCH_REJECTED",
//           payload: err
//         })
//       })
//   }

// This action creator is used sending action to add item to mylist and remove the same item form Recommendations list
export const addRec = item => {
  return {
    type: 'ADD',
    payload: item,
  }
}

// This action creator is used sending action to remove item from mylist and add to Recommendations list
export const remove = item => {
  return {
    type: 'REMOVE',
    payload: item
  }
}