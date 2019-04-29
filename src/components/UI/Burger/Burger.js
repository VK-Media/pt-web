import React from 'react'

import './Burger.scss'

export default props => {
    return (
        <div className="burger" onClick={() => props.onClick()}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}