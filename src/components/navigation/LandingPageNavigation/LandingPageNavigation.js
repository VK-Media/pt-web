import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

class LandingPageNavigation extends Component {
    render(){
        let navLinks = null

        if(_.isEmpty(this.props.user)){
            navLinks = (
                <div className="right menu">
                    <NavLink className="item" activeClassName="active" to="/signup">Opret profil</NavLink>
                    <NavLink className="item" activeClassName="active" to="/signin">Log ind</NavLink>
                </div>
            )
        } else {
            navLinks = (
                <div className="right menu">
                    <NavLink className="item" activeClassName="active" to="/app">Kontrolpanel</NavLink>
                </div>
            )
        }

        return (
            <div className="ui secondary pointing menu">
                <NavLink className="item" activeClassName="active" exact to="/">Hjem</NavLink>
                { navLinks }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LandingPageNavigation)