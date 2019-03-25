import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Signup from './Auth/Signup';
import Signin from './Auth/Signin';

function LandingPage() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/signup/">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/signin/">Sign In</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/signup/" component={Signup} />
                <Route path="/signin/" component={Signin} />
            </div>
        </Router>
    );
}

export default LandingPage;