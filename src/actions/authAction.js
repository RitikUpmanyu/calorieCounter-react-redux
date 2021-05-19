import {
    LOGIN,
    LOGOUT,
    LOGIN_ADMIN} from '../constant/types'



export const login = (userName)=>({
        type: LOGIN,
        payload: userName
});

export const logout = () => ({
    type: LOGOUT,
})

export const loginAdmin = (userName) => ({
    type: LOGIN_ADMIN,
    payload: userName,
})
