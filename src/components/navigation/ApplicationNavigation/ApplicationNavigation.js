import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../../../actions'

class ApplicationNavigation extends Component {
    requestLogout = () => {
        this.props.logout()
    }

    render() {
        return (
            <div id="app-menu">
                <NavLink activeClassName="active" exact to="/app">Kontrolpanel</NavLink>
                <NavLink activeClassName="active" to="/app/profile">Profil</NavLink>
                <button onClick={this.requestLogout}>Log ud</button>
            </div>
        )
    }
}

export default connect(null, { logout })(ApplicationNavigation)