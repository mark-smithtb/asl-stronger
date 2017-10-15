import React from 'react'
import { NavLink } from 'react-router-dom'

let Nav = () =>

    <nav id="nav-list">
      <NavLink to="/">Home</NavLink>
      <NavLink className="nav-item"to="/Dictionary/English">English Dictionary</NavLink>
      <NavLink className="nav-item" to="/categories">Categories</NavLink>
      <NavLink className="nav-item" to="/about">About</NavLink>
    </nav>

export default Nav
