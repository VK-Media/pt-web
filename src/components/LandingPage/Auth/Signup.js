import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'

import LandingPageNavigation from '../../navigation/LandingPageNavigation/LandingPageNavigation'
import { renderInput } from '../../../helpers/input'
import './Auth.scss'

import { createUserFromSignup } from '../../../actions'

class Signup extends Component {
    fields = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email'
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Kodeord'
        },
        {
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Gentag kodeord'
        }
    ]

    onSubmit = formValues => {
        this.props.createUserFromSignup(formValues)
    }

    render = () => {
        if (!_.isEmpty(this.props.user)) {
            return <Redirect to="/app" />
        }

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

                <h1>Opret profil</h1>
                <div className="form-container">
                    <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        {inputs}
                        <button className="ui fluid green button" >Opret profil</button>
                    </form>
                </div>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.email) {
        errors.email = 'En email er påkrævet'
    }

    if (!formValues.password) {
        errors.password = 'Et kodeord er påkrævet'
    }

    if (!formValues.confirmPassword) {
        errors.confirmPassword = 'Venligst gentag dit kodeord'
    }

    if (formValues.confirmPassword && formValues.password !== formValues.confirmPassword) {
        errors.confirmPassword = 'Dine kodeord er ikke ens'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'signUp',
    validate
})(Signup)

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { createUserFromSignup })(formWrapped)
