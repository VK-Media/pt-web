import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from './LandingPage/LandingPage'
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';

export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={LandingPage} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
            </BrowserRouter>
        </div>
    );
}