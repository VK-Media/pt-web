import api from '../apis/api'
import { getToken, isTokenExpired } from '../helpers/authentication'

import { AUTHENTICATE_USER_FROM_TOKEN, AUTHENTICATE_USER_FROM_LOGIN, CREATE_USER_FROM_SIGNUP, LOG_OUT } from './types'

export const authenticateUserFromToken = () => async dispatch => {
    const token = getToken()
    let response = { data: { user: {} } }

    if (token) {
        if (!isTokenExpired(token)) {
            const axiosConfig = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }

            response = await api.get('/user/authenticate/jwt', axiosConfig)
        }
    }

    dispatch({ 'type': AUTHENTICATE_USER_FROM_TOKEN, 'payload': response.data.user })
}

export const authenticateUserFromSignin = formValues => async dispatch => {
    let response = initialResponse
    response = await api.post('/user/authenticate/credentials', formValues)

    dispatch({ 'type': AUTHENTICATE_USER_FROM_LOGIN, 'payload': response.data })
}

export const createUserFromSignup = formValues => async dispatch => {
    let response = initialResponse

    response = await api.post('/user', formValues)

    dispatch({ 'type': CREATE_USER_FROM_SIGNUP, 'payload': response.data })
}

export const logout = () => ({ 'type': LOG_OUT })

const initialResponse = { data: { token: '', user: {} } }