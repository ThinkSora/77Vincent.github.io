import fetch from 'cross-fetch'

// Action types 
export const FETCH_POSTS = 'FETCH_POSTS'
export const SET_POST = 'SET_POST'

const POSTS_URL = 'https://api.github.com/repos/77Vincent/blog/issues'

export const fetchPosts = () => dispatch => {
  fetch(POSTS_URL)
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_POSTS,
      payload: data, 
    }))
}

export const setContent = (post = {}) => dispatch => {
  dispatch({
    type: SET_POST,
    payload: post,
  })
}