import { FETCH_POSTS, NEW_POSTS } from '../actions/types'

const initialState = {
  items: [],
  item: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      }
  }
}