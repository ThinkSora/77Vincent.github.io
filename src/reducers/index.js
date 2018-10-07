import { FETCH_POSTS } from '../actions/types'
import { combineReducers } from 'redux'

const posts = (state = [], action) => {
  switch(action.type) {
    default:
      return state
    case FETCH_POSTS:
      return action.payload
  }
}

export default combineReducers({ posts })