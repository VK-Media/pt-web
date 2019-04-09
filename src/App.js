import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authenticateUser, toggleLoadscreen } from './actions'
import './App.scss'
import LandingPage from './components/LandingPage'
import Loader from './components/Loader/Loader'

class App extends Component {
    componentDidMount() {
        this.props.authenticateUser()

        setTimeout(() => {
            this.props.toggleLoadscreen()
        }, 5000)
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

export default connect(mapStateToProps, { authenticateUser, toggleLoadscreen })(App)
