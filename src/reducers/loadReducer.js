import { TOGGLE_LOADSCREEN } from '../actions/types'

export default (state = true, action) => {
    switch (action.type) {
        case TOGGLE_LOADSCREEN:
            return !state
        default:
            return state
    }
}