import React from 'react'
import _ from 'lodash'

import './Input.scss'

export default (input) => {
    return (
        <div className="ui fluid input">
            { determineType(input) }
        </div>
    )
}

const determineType = ({ name, type, id, value, placeholder, options, onChange, onFocus, onBlur }) => {
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

        case 'select':
            let renderedOptions = null

            if (!_.isEmpty(options)) {
                renderedOptions = options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })
            }

            return (
                <select 
                    value={value}
                    name={name}
                    id={id}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                    <option value="">{placeholder}</option>
                    { renderedOptions }
                </select>
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