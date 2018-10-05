import React from 'react'
import { Link } from "react-router-dom"

import './index.css'

export default (props) => {
  return (
    <header className="App-header">
      <Link to="/" className="logo">Vincent 77 Blog</Link>
    </header>
  ) 
}
