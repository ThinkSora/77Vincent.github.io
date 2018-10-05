import React from 'react'
import { Link } from "react-router-dom"

import './index.css'

export default (props) => {
  return (
    <header className="App-header">
      <Link to="/" className="App-header-logo">Vincent 77 Blog</Link>
    </header>
  ) 
}
