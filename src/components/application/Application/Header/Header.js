import React from 'react'

import './Header.scss'

export default props => {
    const title = props.title ? <h1>{props.title}</h1> : null

    return (
        <div id="header">
            { title }
        </div>
    )
}