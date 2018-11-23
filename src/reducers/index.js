import { FETCH_POSTS, SET_POST } from '../actions'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

const initialNavigation = [{
  title: 'Posts / 博客',
  link: '/',
}, {
  title: 'About Me / 关于我',
  link: '/about-me',
}]

const navigation = (state = initialNavigation, action) => {
  switch(action.type) {
    default:
      return state
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