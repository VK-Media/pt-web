import React from 'react'

import './Cog.scss'

export default props => {
    const cog = props.show ? <i className="fal fa-cog"></i> : null

    return cog
}