import api from '../apis/api'
import { getToken, isTokenExpired } from '../helpers/authentication'

import { AUTHENTICATE_USER } from './types'

export const authenticateUser = () => async dispatch => {
    const token = getToken()
    let response = { data: {} }

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
        'type': AUTHENTICATE_USER,
        'payload': response.data
    })
}