import React, { Component } from 'react'
import decode from 'jwt-decode'
import api from './apis/api'

import './App.scss'

import LandingPage from './components/LandingPage'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true }
    }

    componentDidMount() {
        console.log(process.env)
        /*
        const url = 'https://pt-api.vkmedia.dk'

        axios.get(url)
        .then(response => {
            setTimeout(() => {
            this.setState({ isLoading: false })
            }, 2000)

            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
        */

        const token = this.getToken()

        if(token){
            if(!this.isTokenExpired(token)){
                const axiosConfig = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }

                api.get('/user/authenticate/jwt', axiosConfig)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        } else {
            this.setState({ isLoading: false })
        }
    }

    getToken = () => {
        return localStorage.getItem("id_token");
    }

    isTokenExpired = token => {
        try {
            const decoded = decode(token);
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

export default App
