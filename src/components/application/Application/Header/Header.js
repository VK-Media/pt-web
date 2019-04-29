import React from 'react'

import './Header.scss'
import Burger from '../../../UI/Burger/Burger'
import Cog from '../../../UI/Cog/Cog'

export default props => {
    const title = props.title ? <h1>{props.title}</h1> : null

    return (
        <div id="header">
            <div className="left"><Burger /></div>
            <div className="center">{ title }</div>
            <div className="right"><Cog show={ props.showSettings } /></div>
        </div>
    )
}