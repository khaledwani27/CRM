import React from 'react'

function FillterBy() {

    const handleSelect = (e) => {
        //props.GeneralStore.handleInput(e.target.name, e.target.value)
    }    
    return (
        <select id="select-input" name="fillter" onChange={handleSelect}>
            <option value="sold">Sold</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="owner">Owner</option>
            <option value="country">Country</option>
        </select>
    )
}

export default FillterBy