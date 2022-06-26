import React from 'react'
import FillterBy from './FillterBy'
import Search from './Search'

function Container() {
    return (
        <div id="main-top">
            <div id='main-links'>
              <Search />
              <FillterBy/>
            </div> 
            <div className='counter'>
              <span>{"<"} </span> 
              0/20 
              <span> {">"}</span>  
            </div>
        </div>
    )
}

export default Container