import { authenticateUser } from './index'
import { toggleLoadscreen } from './index'

export const authenticateUserOrLogin = () => async (dispatch, getState) => {
    await dispatch(authenticateUser())
    
    dispatch(toggleLoadscreen())
}