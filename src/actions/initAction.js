import { authenticateUserFromToken } from './index'
import { toggleLoadscreen } from './index'

export const authenticateUserOrLogin = () => async (dispatch, getState) => {
    await dispatch(authenticateUserFromToken())

    dispatch(toggleLoadscreen())
}