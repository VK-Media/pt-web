import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ApplicationNavigation extends Component {
    render() {
        return (
            <div className="ui vertical fluid tabular menu">
                <NavLink className="item" activeClassName="active" to="/app/settings">Settings</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/account">Account</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/clients">Clients</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/exercises">Exercises</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/programs">Programs</NavLink>
            </div>
        )
    }
}

export default ApplicationNavigation