import React from 'react'

import './Input.scss'

export default ({ name, type, id, value, placeholder, onChange }) => {
    return (
        <div className="ui fluid input">
            <input
                className='input'
                name={name}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange} />
        </div>
    )
}