import React, { Component } from 'react';
import axios from 'axios';

import Input from './../UI/Input/Input'
import './Signup.scss'

class Signin extends Component {
    fields = [
        {
            name: 'email',
            elementType: 'input',
            type: 'email',
            placeholder: 'Email'
        },
        {
            name: 'password',
            elementType: 'input',
            type: 'password',
            placeholder: 'Password'
        }
    ]

    state = {
        email: '',
        password: ''
    }

    signinHandler = () => {
        axios.post('http://localhost:8080/user/authenticate/credentials', { email: this.state.email, password: this.state.password })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        const inputs = this.fields.map(field => {
            return (
                <Input
                    key={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={this.state[field.name]}
                    type={field.type}
                    onChange={this.handleInputChange}
                />
            )
        })

        return (
            <div className="form-container">
                {inputs}
                <button className="ui fluid green button" onClick={this.signinHandler}>Sign in</button>
            </div>
        );
    }
}

export default Signin;
