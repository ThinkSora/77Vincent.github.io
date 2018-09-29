import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions'

class PostsComponent extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const posts = this.props.posts.map((each) => (
      <div key={each.id}>
        <h1>{each.title}</h1>
        <p>{each.body}</p>
      </div>
    ))
    return (
      <div>
        {posts}
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, { fetchPosts })(PostsComponent)