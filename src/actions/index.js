import { FETCH_POSTS, NEW_POSTS } from './types'

const POSTS_URL = 'https://api.github.com/repos/77Vincent/blog/issues'

export const fetchPosts = () => dispatch => {
  fetch(POSTS_URL)
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_POSTS,
      payload: data, 
    }))
}