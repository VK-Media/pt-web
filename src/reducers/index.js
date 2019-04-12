import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import userReducer from './userReducer'
import loadReducer from './loadReducer'

export default combineReducers({
    user: userReducer,
    isLoading: loadReducer,
    form: reduxFormReducer
})