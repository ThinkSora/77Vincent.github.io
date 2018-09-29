import { FETCH_POSTS, NEW_POSTS } from '../actions/types'

export default (state, action) => {
  switch(action.type) {
    default:
      return state
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
  }
}