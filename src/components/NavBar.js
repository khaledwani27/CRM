import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  return (
    <header>
      <div id="main-header" >
        <div id="main-links" className="container">
          <NavLink to="/" activeclassname="active">Clients </NavLink>
          <NavLink to="/actions" activeclassname="active">Actions</NavLink>
          <NavLink to="/analytics" activeclassname="active">Analytics</NavLink>
        </div>
      </div>
    </header>
  )

}

export default NavBar



