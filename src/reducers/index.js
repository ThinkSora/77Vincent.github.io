import { FETCH_POSTS, SET_POST, SET_NAVIGATION } from '../actions'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

export const initialNavigation = {
  type: 1,
  links: [{
    title: 'Posts / 博客',
    link: '/',
  }, {
    title: 'About Me / 关于我',
    link: '/about-me',
  }]
}

const navigation = (state = initialNavigation, action) => {
  switch(action.type) {
    default:
      return state
    case SET_NAVIGATION:
      return action.payload
  }
}

const posts = (state = [], action) => {
  switch(action.type) {
    default:
      return state
    case FETCH_POSTS:
      return action.payload
  }
}

const post = (state = {}, action) => {
  switch(action.type) {
    default:
      return state
    case SET_POST:
      return action.payload
  }
}

export default combineReducers({
  posts,
  post,
  navigation,
  loadingBar: loadingBarReducer,
})