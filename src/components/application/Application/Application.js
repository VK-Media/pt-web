import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'

import './Application.scss'

import Header from './Header/Header'
import ApplicationNavigation from '../../navigation/ApplicationNavigation/ApplicationNavigation'

const Application = props => {
    if (_.isEmpty(props.user)) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <Header title={props.title} showSettings={ props.showSettings } />
            <ApplicationNavigation />
            <div id="content">{props.children}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Application)