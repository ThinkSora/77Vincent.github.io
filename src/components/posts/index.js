import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { fetchPosts } from '../../actions'
import './index.css'

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, { fetchPosts })(
  (props) => {
    return (
      <div className="App-posts">
        {
          props.posts.map((post) => (
            <div className="App-posts-item" key={post.id}>
              <div className="App-text-2">{post.title}</div>

              <div className="App-text-5">{moment(post.updated_at).format('D/MM/YYYY')}</div>

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
            </div>
          ))
        }
      </div>
    ) 
  }
)