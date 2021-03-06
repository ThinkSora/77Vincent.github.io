import React, { Component } from 'react'
import prism from "prismjs"
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import { formatDate } from '../../service'
import './index.css'

const mapStateToProps = state => ({
  posts: state.posts,
  post: state.post,
})

const Post = ({ post }) => {
  setTimeout(() => {
    prism.highlightAll()
  }, 100)

  return (
    <div className="App-post">
      <hgroup>
        <div className="App-text-1"> { post.title } </div>
        <h3 className="App-text-5">{ formatDate(post.updated_at) }</h3>
      </hgroup>

      <ReactMarkdown className="App-markdown" escapeHtml={false} source={post.body}/>
    </div>
  ) 
}

export default connect(mapStateToProps, { })(Post)
