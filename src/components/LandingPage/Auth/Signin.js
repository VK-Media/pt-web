import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'

import LandingPageNavigation from '../../navigation/LandingPageNavigation/LandingPageNavigation'
import { renderInput } from '../../../helpers/input'
import './Auth.scss'

import { authenticateUserFromSignin } from '../../../actions'

class Signin extends Component {
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
        }
    ]

    onSubmit = formValues => {
        this.props.authenticateUserFromSignin(formValues)
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

                <h1>Log ind</h1>
                <div className="form-container">
                    <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        {inputs}
                        <button className="ui fluid green button" >Log ind</button>
                    </form>
                </div>
            </div>
        )
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

    return errors
}

const formWrapped = reduxForm({
    form: 'signIn',
    validate
})(Signin)

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { authenticateUserFromSignin })(formWrapped)
