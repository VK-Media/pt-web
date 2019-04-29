import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import Application from '../Application/Application'
import { renderInput } from '../../../helpers/input'

import { updateUser } from '../../../actions/index'

class Profile extends Component {
    fields = [
        {
            name: 'firstName',
            type: 'text',
            placeholder: 'Fornavn'
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Efternavn'
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email'
        },
        {
            name: 'description',
            type: 'textarea',
            placeholder: 'Beskrivelse'
        },
        {
            name: 'age',
            type: 'number',
            placeholder: 'Alder'
        }
    ]

    onSubmit = formValues => {
        this.props.updateUser(formValues, this.props.initialValues._id)
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
            <Application title="Profil" showSettings={ true }>
                <NavLink to="/app/preferences"><i className="big icon cog"></i></NavLink>

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

    if (!formValues.email) {
        errors.email = 'En email er påkrævet'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'updateUser',
    validate
})(Profile)

const mapStateToProps = state => {
    return {
        initialValues: state.user
    }
}

export default connect(mapStateToProps, { updateUser })(formWrapped)
