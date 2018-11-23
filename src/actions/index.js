import fetch from 'cross-fetch'
import store from '../store'

import { generateAnchors } from '../service'

// Action types 
export const FETCH_POSTS = 'FETCH_POSTS'
export const SET_POST = 'SET_POST'
export const SET_NAVIGATION = 'SET_NAVIGATION'

const POSTS_URL = 'https://api.github.com/repos/77Vincent/blog/issues'

export const fetchPosts = () => dispatch => {
  fetch(POSTS_URL)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_POSTS,
        payload: data, 
      })

      const parsedHref = window.location.href.split('/')
      const postID = Number(parsedHref[parsedHref.length - 1])

      let post = store.getState().posts.filter(item => item.id === postID)[0]

      if (post) {
        const anchors = generateAnchors(post.body)
        store.dispatch(setPost(post))
        store.dispatch(setNavigation(anchors))
      }
    })
}

export const setPost = post => dispatch => {
  dispatch({
    type: SET_POST,
    payload: post,
  })
}

export const setNavigation = navigation => dispatch => {
  dispatch({
    type: SET_NAVIGATION,
    payload: navigation,
  })
}
