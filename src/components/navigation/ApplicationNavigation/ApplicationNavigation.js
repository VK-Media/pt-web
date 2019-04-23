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
            <div className="ui vertical fluid tabular menu">
                <NavLink className="item" activeClassName="active" exact to="/app">Dashboard</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/settings">Settings</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/account">Account</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/clients">Clients</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/exercises">Exercises</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/programs">Programs</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/profile">Profile</NavLink>
                <button className="ui red button" onClick={this.requestLogout}>Log out</button>
            </div>
        )
    }
}

export default connect(null, { logout })(ApplicationNavigation)