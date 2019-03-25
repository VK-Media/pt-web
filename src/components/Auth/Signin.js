import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
    signinHandler() {
        axios.post('http://localhost:8080/user/authenticate/credentials', { email: 'rlvk94@gmail.com', password: '1234' })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={this.signinHandler}>Sign In</button>
            </div>
        );
    }
}

export default Signin;
