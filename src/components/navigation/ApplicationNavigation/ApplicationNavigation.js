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
                <NavLink className="item" activeClassName="active" exact to="/app">Kontrolpanel</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/settings">Præferencer</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/clients">Klienter</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/exercises">Øvelser</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/programs">Programmer</NavLink>
                <NavLink className="item" activeClassName="active" to="/app/profile">Profil</NavLink>
                <button className="ui red button" onClick={this.requestLogout}>Log ud</button>
            </div>
        )
    }
}

export default connect(null, { logout })(ApplicationNavigation)