import React, { useEffect, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { fetch, addRec, remove } from "../actions/userActions"
import List from './List'

const Layout = props => {
  const {
    mylist,
    recommendations,
    addRec,
    remove
  } = props;

  useEffect(() => {
      props.fetch()
  },[fetch])

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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
