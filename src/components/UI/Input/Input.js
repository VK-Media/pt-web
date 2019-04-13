import React from 'react'

import './Input.scss'

export default ({ name, type, id, value, placeholder, onChange, onFocus, onBlur }) => {
    return (
        <div className="ui fluid input">
            <input
                className='input'
                name={name}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur} />
        </div>
    )
}