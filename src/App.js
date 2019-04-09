import React, { Component } from 'react'
import decode from 'jwt-decode'
import { connect } from 'react-redux'

import { authenticateUser } from './actions'
import './App.scss'
import LandingPage from './components/LandingPage'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true }
    }

    componentDidMount() {
        this.props.authenticateUser()
    }

    getToken = () => {
        return localStorage.getItem("id_token")
    }

    isTokenExpired = token => {
        try {
            const decoded = decode(token)
            console.log(decoded)
            if (decoded.exp < Date.now() / 1000) {
                return true
            } else return false
        } catch (err) {
            return false
        }
    }

    render() {
        const content = this.state.isLoading ? <div className="loading"><div className="spinner"><div></div><div></div></div></div> : <LandingPage />

        return content
    }
}

export default connect(null, { authenticateUser })(App)
