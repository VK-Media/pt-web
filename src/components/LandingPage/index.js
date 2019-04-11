import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Signup from './Auth/Signup';
import Signin from './Auth/Signin';

export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/signup/" component={Signup} />
                <Route path="/signin/" component={Signin} />
            </BrowserRouter>
        </div>
    );
}