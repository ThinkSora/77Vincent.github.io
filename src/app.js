import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom"

import { fetchPosts } from './actions'
import PostComponent from './components/post/'
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
        <BrowserRouter>
          <div className='App'>
            <HeaderComponent />

            <div className="App-layout">
              <Route path="/" exact component={PostsComponent}/>
              <Route path="/posts/:id" component={PostComponent}/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
