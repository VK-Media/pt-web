import React from 'react'

import './Input.scss'

export default (props) => {
    return (
        <input
            className='input'
            name={props.name}
            type={props.type}
            id={props.id}
            value={props.value}
            placeholder={props.placeholder} />
    )
}