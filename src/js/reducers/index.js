import { combineReducers } from "redux"

import data from "./userReducer"

// A good coding habit here.
// In the future, this could allow us to add more reducers
export default combineReducers({
  data
})
