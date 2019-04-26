import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import Application from '../Application/Application'
import { renderInput } from '../../../helpers/input'

import { updateUser } from '../../../actions/index'

class Preferences extends Component {
    fields = [
        {
            name: 'prefillWorkouts',
            type: 'checkbox',
            placeholder: 'Udfyld mine træninger med min træners anbefalinger'
        },
        {
            name: 'language',
            type: 'select',
            placeholder: 'Sprog',
            options: [
                {
                    label: 'Dansk',
                    value: 'dk'
                },
                {
                    label: 'English',
                    value: 'en'
                }
            ]
        },
        {
            name: 'units',
            type: 'select',
            placeholder: 'Enheder',
            options: [
                {
                    label: 'Kilo',
                    value: 'kg'
                },
                {
                    label: 'Pund',
                    value: 'lbs'
                }
            ]
        },
        {
            name: 'allowNotifications',
            type: 'checkbox',
            placeholder: 'Tillad notifikationer'
        }
    ]

    onSubmit = formValues => {
        const preferences = {preferences: { ...formValues }}

        this.props.updateUser(preferences, this.props.userId)
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
                    options={field.options}
                />
            )
        })

        return (
            <Application title="Indstillinger">
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    {inputs}
                    <button className="ui fluid green button" >Opdater</button>
                </form>
            </Application>
        )
    }
}

const validate = formValues => {
    const errors = {}

    return errors
}

const formWrapped = reduxForm({
    form: 'updateUser',
    validate
})(Preferences)

const mapStateToProps = state => {
    return {
        initialValues: state.user.preferences,
        userId: state.user._id
    }
}

export default connect(mapStateToProps, { updateUser })(formWrapped)
