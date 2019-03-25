import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    loginHandler() {
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
                <button onClick={this.loginHandler}>Login</button>
            </div>
        );
    }
}

export default Login;
