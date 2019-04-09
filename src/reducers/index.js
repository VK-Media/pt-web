import { combineReducers } from 'redux'

import userReducer from './userReducer'
import loadReducer from './loadReducer'

export default combineReducers({
    user: userReducer,
    isLoading: loadReducer
})