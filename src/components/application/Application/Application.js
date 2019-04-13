import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'

import ApplicationNavigation from '../../navigation/ApplicationNavigation/ApplicationNavigation'

const Application = props => {
    if (_.isEmpty(props.user)) {
        return <Redirect to="/" />
    }

    return (
        <div className="ui grid">
            <div className="three wide column"><ApplicationNavigation /></div>
            <div className="thirteen wide column">{props.children}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Application)