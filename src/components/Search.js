import React from 'react'


function Search() {

    const inputHandler = (e) => {
        //props.GeneralStore.handleInput(e.target.name, e.target.value)
    }
    const search =() =>{
        
    } 
    return (
        <div>
            <input onChange={inputHandler}
                name="search-input"
                placeholder="search" />
            <button className='icon-container' onClick={search}>
                Search
            </button>
        </div>
    )
}

export default Search