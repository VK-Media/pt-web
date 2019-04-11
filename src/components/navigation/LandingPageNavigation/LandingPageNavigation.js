import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <div className="ui secondary pointing menu">
            <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>

            <div className="right menu">
                <NavLink className="item" activeClassName="active" to="/signup">Sign Up</NavLink>
                <NavLink className="item" activeClassName="active" to="/signin">Sign In</NavLink>
            </div>
        </div>
    )
}