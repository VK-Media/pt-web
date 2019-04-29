import React from 'react'
import { connect } from 'react-redux'

import { toggleApplicationMenu } from '../../../../actions/index'

import './Header.scss'
import Burger from '../../../UI/Burger/Burger'
import Cog from '../../../UI/Cog/Cog'

const Header = props => {
    const title = props.title ? <h1>{props.title}</h1> : null

    const onMenuClick = () => {
        props.toggleApplicationMenu()
    }

    return (
        <div id="header">
            <div className="left"><Burger onClick={() => onMenuClick()} /></div>
            <div className="center">{ title }</div>
            <div className="right"><Cog show={ props.showSettings } /></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showApplicationMenu: state.showApplicationMenu 
    }
}

export default connect(mapStateToProps, { toggleApplicationMenu })(Header)