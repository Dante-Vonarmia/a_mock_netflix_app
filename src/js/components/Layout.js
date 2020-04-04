import React, { useEffect, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { fetch, addRec, remove } from "../actions/userActions"
import List from './List'

// Using hooks and side-effect function in a functional component
const Layout = props => {
  // Pass down all the props from store
  const {
    mylist,
    recommendations,
    addRec,
    remove
  } = props;

  useEffect(() => {
      props.fetch()
  },[fetch])

  // using return directly instead of using render which is more efficiency here.
  return (
    <div className="container">
      <h6>My List</h6>
      <div className="list-item">
      {
        mylist.length ? (
          <List data = { mylist } 
              handleClick={ remove } 
              eventText = {"Remove"} />
        ) : (
          <figure>No content here</figure>
        )
      }
      </div>
      <h6>Recommendations</h6>
      <div className="list-item">
      {
        recommendations.length ? (
          <List data = { recommendations } 
              handleClick={ addRec } 
              eventText = {"Add"} />
        ) : (
          <figure>No content here</figure>
        )
      }
      </div>
      <h6>Title Lists:</h6>
      <ul className="titleOnly">
        <List data = { mylist } titleOnly = { true } />
      </ul>
    </div>
  )
}

// mapping the redux state and dispatch
const mapStateToProps = (state) => ({
  mylist: state.data.mylist,
  recommendations: state.data.recommendations
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetch,
    addRec,
    remove
  }, dispatch)

// connect function here is a HOC.
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
