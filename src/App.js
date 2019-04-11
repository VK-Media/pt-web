import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authenticateUserOrLogin } from './actions'
import './App.scss'
import LandingPage from './components/LandingPage/index'
import Loader from './components/Loader/Loader'

class App extends Component {
    componentDidMount() {
        this.props.authenticateUserOrLogin()
    }

    render() {
        const content = this.props.isLoading ? <Loader /> : <LandingPage />

        return content
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user
    }
}

export default connect(mapStateToProps, { authenticateUserOrLogin })(App)
