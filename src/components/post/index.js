import React, { Component } from 'react'
import prism from "prismjs"
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import { formatDate } from '../../service'
import { setContent } from '../../actions'
import store from '../../store'
import './index.css'

const mapStateToProps = state => ({
  posts: state.posts,
  post: state.post,
})

// const getContent = () => {
//   const anchors = document.querySelectorAll('.App-markdown h2 a')
//   const content = []
//   for (let item of anchors) {
//     content.push(item.name)
//   }
//   return content
// }

class Post extends Component {
  componentDidMount() {
    this.setPost(this.props.match.params.id)
  }

  setPost = (currentPost) => {
    const previousPost = String(store.getState().post.id)

    if (previousPost !== currentPost) {
      const post = this.props.posts.filter((v, i) => {
        return String(v.id) === currentPost || {}
      })[0]
      store.dispatch(setContent(post))
    }
  }

  render() {
    setTimeout(() => {
      prism.highlightAll()
    }, 0)

    const { post } = this.props

    return (
      <div className="App-post">
        <hgroup>
          <h2 className="App-post-title"> { post.title } </h2>
          <h3 className="App-text-5">{ formatDate(post.updated_at) }</h3>
        </hgroup>
        <ReactMarkdown className="App-markdown" escapeHtml={false} source={post.body}/>
      </div>
    ) 
  }
}

export default connect(mapStateToProps, { })(Post)
