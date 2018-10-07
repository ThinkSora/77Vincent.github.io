import React from 'react'
import moment from 'moment'
import prism from "prismjs"
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import './index.css'

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, { })(
  ({ match, posts }) => {

    const post = posts.filter((v, i) => String(v.id) === match.params.id)[0] || {}
    setTimeout(() => {
      prism.highlightAll()
    }, 0)

    return (
      <div className="App-post">
        <h2 className="App-post-title"> { post.title } </h2>
        <ReactMarkdown className="App-markdown" source={post.body}/>
      </div>
    ) 
  }
)