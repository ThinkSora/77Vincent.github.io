import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { fetchPosts } from './actions'
import PostsComponent from './components/posts/'
import HeaderComponent from './components/header/'
import store from './store'
import './App.css'


class App extends Component {
  componentDidMount() {
    store.dispatch(fetchPosts())
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <HeaderComponent />

          <div className="App-layout">
            <PostsComponent />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
