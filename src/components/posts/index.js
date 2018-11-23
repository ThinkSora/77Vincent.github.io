import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../../actions'
import { formatDate } from '../../service'
import './index.css'

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, { })(
  ({ posts }) => {
    return (
      <div className="App-posts">
        {
          posts.map((post) => (
            <Link to={`/posts/${post.id}`} className="App-posts-item" key={post.id}>
              <div className="App-text-2">{post.title}</div>

              <div className="App-text-5">{formatDate(post.updated_at)}</div>

              {
                post.labels.map((label) => (
                  <div
                    key={label.id}
                    className="App-label"
                    style={{backgroundColor: `#${label.color}`}}>
                    {label.name}
                  </div>
                ))
              }

              <div className="App-posts-item-comments App-text-5">
                Comments: {post.comments}
              </div>
            </Link>
          ))
        }
      </div>
    ) 
  }
)