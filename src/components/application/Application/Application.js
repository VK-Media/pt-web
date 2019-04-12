import React from 'react'

import ApplicationNavigation from '../../navigation/ApplicationNavigation/ApplicationNavigation'

export default props => {
    return (
        <div className="ui grid">
            <div className="three wide column"><ApplicationNavigation /></div>
            <div className="thirteen wide column">{ props.children }</div>
        </div>
    )
}