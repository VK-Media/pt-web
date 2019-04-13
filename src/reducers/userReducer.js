import { AUTHENTICATE_USER_FROM_TOKEN, AUTHENTICATE_USER_FROM_LOGIN, CREATE_USER_FROM_SIGNUP } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER_FROM_TOKEN:
        case AUTHENTICATE_USER_FROM_LOGIN:
        case CREATE_USER_FROM_SIGNUP:
            return action.payload
        default:
            return state
    }
}