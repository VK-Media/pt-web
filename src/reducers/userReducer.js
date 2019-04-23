import {
    AUTHENTICATE_USER_FROM_TOKEN,
    AUTHENTICATE_USER_FROM_LOGIN,
    CREATE_USER_FROM_SIGNUP,
    UPDATE_USER,
    LOG_OUT
} from '../actions/types'

import { removeToken, setToken } from '../helpers/authentication'

export default (state = {}, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER_FROM_TOKEN:
            return action.payload
        case AUTHENTICATE_USER_FROM_LOGIN:
        case CREATE_USER_FROM_SIGNUP:
            if (action.payload.token) setToken(action.payload.token)

            return action.payload.user
        case UPDATE_USER:
            return action.payload
        case LOG_OUT:
            removeToken()
            return {}
        default:
            return state
    }
}