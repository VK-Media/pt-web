import React from 'react'

import './Input.scss'

export default (input) => {
    return (
        <div className="ui fluid input">
            { determineType(input) }
        </div>
    )
}

const determineType = ({ name, type, id, value, placeholder, onChange, onFocus, onBlur }) => {
    switch (type) {
        case 'textarea':
            return (
                <textarea
                    className='input'
                    name={name}
                    type={type}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            )

        default:
            return (
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
            )
    }
}