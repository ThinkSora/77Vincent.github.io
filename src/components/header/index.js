import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import { initialNavigation } from '../../reducers'
import { setNavigation } from '../../actions'
import store from '../../store'
import './index.css'

const mapStateToProps = state => ({
  navigation: state.navigation,
})

const setNav = () => {
  store.dispatch(setNavigation(initialNavigation))
}

const Nav = ({ navigation }) => {
  return (
    <header className="App-header">
      <Link to="/" onClick={setNav} className="App-header-logo">
        <div className="App-header-logo-en"> Tianqi's Blog </div>
        <div className="App-header-logo-cn"> 天启的博客 </div>
      </Link>

      {
        navigation.type ? 
          navigation.links.map((item, index) => (
            <Link key={index} className="App-header-link" to={item.link}>{item.title}</Link>
          )) :
          navigation.links.map((item, index) => (
            <a key={index} className="App-header-link" href={item.link}>{item.title}</a>
          ))
      }
    </header>
  ) 
}

export default connect(mapStateToProps, { })(Nav)