import { FETCH_POSTS, NEW_POSTS } from './types'

export const fetchPosts = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_POSTS,
      payload: data, 
    }))
}