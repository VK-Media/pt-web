import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import LandingPageNavigation from '../../navigation/LandingPageNavigation/LandingPageNavigation'
import { renderInput } from '../../../helpers/input'
import './Auth.scss'

import { createUserFromSignup } from '../../../actions'

class Signup extends Component {
    fields = [
        {
            name: 'firstName',
            type: 'text',
            placeholder: 'First name'
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Last name'
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email'
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        },
        {
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password'
        }
    ]

    onSubmit = formValues => {
        this.props.createUserFromSignup(formValues)
    }

    render = () => {
        const inputs = this.fields.map(field => {
            return (
                <Field
                    component={renderInput}
                    key={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                />
            )
        })

        return (
            <div>
                <LandingPageNavigation />

                <h1>Sign Up</h1>
                <div className="form-container">
                    <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        {inputs}
                        <button className="ui fluid green button" >Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.firstName) {
        errors.firstName = 'Your first name is required'
    }

    if (!formValues.lastName) {
        errors.lastName = 'Your last name is required'
    }

    if (!formValues.email) {
        errors.email = 'An email is required'
    }

    if (!formValues.password) {
        errors.password = 'A password is required'
    }

    if (!formValues.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password'
    }

    if (formValues.confirmPassword && formValues.password !== formValues.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'signUp',
    validate
})(Signup)

export default connect(null, { createUserFromSignup })(formWrapped)
