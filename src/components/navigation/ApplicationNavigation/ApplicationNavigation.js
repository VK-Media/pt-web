import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../../../actions'

import './ApplicationNavigation.scss'

class ApplicationNavigation extends Component {
    requestLogout = () => {
        this.props.logout()
    }

    renderMenu = () => {
        let menu = null

        if(this.props.showApplicationMenu) {
            menu = (
                <div id="app-menu">
                    <NavLink activeClassName="active" exact to="/app">Kontrolpanel</NavLink>
                    <NavLink activeClassName="active" to="/app/profile">Profil</NavLink>
                    <p id="logout" onClick={this.requestLogout}>Log ud</p>
                </div>
            )
        }

        return menu
    }

    render() {
        return this.renderMenu()
    }
}

const mapStateToProps = state => {
    return {
        showApplicationMenu: state.showApplicationMenu
    }
}

export default connect(mapStateToProps, { logout })(ApplicationNavigation)