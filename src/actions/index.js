import fetch from 'cross-fetch'
import store from '../store'

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

export const setContent = (postID = null) => dispatch => {
  const post = store.getState().posts.filter(item => item.id === postID)[0]
  dispatch({
    type: SET_POST,
    payload: post,
  })
}