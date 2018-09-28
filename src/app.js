import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { fetchPosts } from './actions'
import PostsComponent from './components/posts'
import store from './store'
import rootReducer from './reducers'
import './App.css'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header>
            <h1>Vincent 77 Blog</h1>
          </header>
          <PostsComponent />
        </div>
      </Provider>
    )
  }
}

export default App
