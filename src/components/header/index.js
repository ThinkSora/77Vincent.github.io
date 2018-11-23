import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import './index.css'

const mapStateToProps = state => ({
  navigation: state.navigation,
})

const Nav = ({ navigation }) => {
  return (
    <header className="App-header">
      <Link to="/" className="App-header-logo">Tianqi's Blog</Link>

      {
        navigation.map((item, index) => (
          <Link key={index} className="App-header-link" to={item.link}>{item.title}</Link>
        ))
      }
    </header>
  ) 
}

export default connect(mapStateToProps, { })(Nav)