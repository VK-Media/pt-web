import React, { Component } from 'react'
import axios from 'axios'

import Input from './../UI/Input/Input'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                {
                    name: 'firstName',
                    value: '',
                    elementType: 'input',
                    type: 'text',
                    placeholder: 'First name'
                },
                {
                    name: 'lastName',
                    value: '',
                    elementType: 'input',
                    type: 'text',
                    placeholder: 'Last name'
                },
                {
                    name: 'email',
                    value: '',
                    elementType: 'input',
                    type: 'email',
                    placeholder: 'Email'
                },
                {
                    name: 'password',
                    value: '',
                    elementType: 'input',
                    type: 'password',
                    placeholder: 'Password'
                },
                {
                    name: 'confirmPassword',
                    value: '',
                    elementType: 'input',
                    type: 'password',
                    placeholder: 'Confirm Password'
                }
            ]
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

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        const inputs = this.state.fields.map(field => {
            return (
                <Input
                    key={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={field.value}
                    type={field.type}
                />
            )
        })

        return (
            <div>
                {inputs}
                <button onClick={this.signupHandler}>Sign up</button>
            </div>
        );
    }
}

export default Signup
