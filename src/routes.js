import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from './components/landingpage/LandingPage/LandingPage'
import Signup from './components/landingpage/Auth/Signup'
import Signin from './components/landingpage/Auth/Signin'
import Dashboard from './components/application/Dashboard/Dashboard'

export default () => {
    return (
        <div>
            <Router>
                <Route path="/" exact component={LandingPage} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/app" exact component={Dashboard} />
            </Router>
        </div>
    )
}