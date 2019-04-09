import decode from 'jwt-decode'

export const getToken = () => {
    return localStorage.getItem("id_token")
}

export const isTokenExpired = token => {
    try {
        const decoded = decode(token)
        console.log(decoded)
        if (decoded.exp < Date.now() / 1000) {
            return true
        } else return false
    } catch (err) {
        return false
    }
}