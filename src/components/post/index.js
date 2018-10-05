import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import './index.css'

const mapStateToProps = state => ({
  post: state.post,
})

export default connect(mapStateToProps, { })(
  (props) => {
    return (
      <div className="App-post">
      </div>
    ) 
  }
)