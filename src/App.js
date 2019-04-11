import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authenticateUserOrLogin } from './actions'
import './App.scss'
import Routes from './routes'
import Loader from './components/landingpage/Loader/Loader'

class App extends Component {
    componentDidMount() {
        this.props.authenticateUserOrLogin()
    }

    render() {
        return this.props.isLoading ? <Loader /> : <Routes />
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user
    }
}

export default connect(mapStateToProps, { authenticateUserOrLogin })(App)
