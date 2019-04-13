import React from 'react'

import Input from '../components/UI/Input/Input'

const renderError = ({ error, touched }) => {
    if (touched && error) {
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        )
    }
}

export const renderInput = ({ input, placeholder, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
        <div className={className}>
            <label>{placeholder}</label>
            <Input {...input} placeholder={placeholder} type={type} />
            {renderError(meta)}
        </div>
    )
}