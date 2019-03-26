import React, { Component } from 'react'
import axios from 'axios'

import Input from './../UI/Input/Input'
import './Signup.scss'

class Signup extends Component {
    fields = [
        {
            name: 'firstName',
            elementType: 'input',
            type: 'text',
            placeholder: 'First name'
        },
        {
            name: 'lastName',
            elementType: 'input',
            type: 'text',
            placeholder: 'Last name'
        },
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
        },
        {
            name: 'confirmPassword',
            elementType: 'input',
            type: 'password',
            placeholder: 'Confirm Password'
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    signupHandler = () => {
        axios.post('http://localhost:8080/user', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
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

    render = () => {
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
                <button className="ui fluid green button" onClick={this.signupHandler}>Sign up</button>
            </div>
        );
    }
}

export default Signup
