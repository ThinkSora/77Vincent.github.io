import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import store from '../../store'
import { setPost, setNavigation } from '../../actions'
import { formatDate, generateAnchors } from '../../service'
import './index.css'

const mapStateToProps = state => ({
  posts: state.posts,
})

const setPostWrap = postId => () => {
  const post = store.getState().posts.filter(item => item.id === postId)[0]
  const links = generateAnchors(post.body)

  store.dispatch(setPost(post))
  store.dispatch(setNavigation({ type: 0, links }))
}

export default connect(mapStateToProps, { })(
  ({ posts }) => {
    return (
      <div className="App-posts">
        {
          posts.map((post) => (
            <Link to={`/posts/${post.id}`} onClick={setPostWrap(post.id)} className="App-posts-item" key={post.id}>
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
            </Link>
          ))
        }
      </div>
    ) 
  }
)