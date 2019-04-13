import api from '../apis/api'
import { getToken, setToken, isTokenExpired } from '../helpers/authentication'

import { AUTHENTICATE_USER_FROM_TOKEN, AUTHENTICATE_USER_FROM_LOGIN, CREATE_USER_FROM_SIGNUP } from './types'

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

    dispatch({
        'type': AUTHENTICATE_USER_FROM_TOKEN,
        'payload': response.data.user
    })
}

export const authenticateUserFromSignin = formValues => async dispatch => {
    let response = { data: { token: '', user: {} } }

    response = await api.post('/user/authenticate/credentials', { ...formValues })

    if (response.data.token) setToken(response.data.token)

    dispatch({
        'type': AUTHENTICATE_USER_FROM_LOGIN,
        'payload': response.data.user
    })
}

export const createUserFromSignup = formValues => async dispatch => {
    let response = { data: { token: '', user: {} } }

    response = await api.post('/user', { ...formValues })

    if (response.data.token) setToken(response.data.token)

    dispatch({
        'type': CREATE_USER_FROM_SIGNUP,
        'payload': response.data.user
    })
}