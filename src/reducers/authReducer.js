import {LOGIN, LOGOUT, LOGIN_ADMIN} from '../constant/types'


const initalState = {
    userName: null,
    isAdmin: false,
};


export const authReducer = (state = initalState, action)=> {
    switch(action.type){
        case LOGIN:
            console.log("logineducer")
            return {
                ...state,
                userName: action.payload,
            }
        case LOGOUT:
            console.log("logouteducer")
            return {
                ...state,
                userName: null,
                isAdmin: false
            } 
        case LOGIN_ADMIN:
            console.log("loginadmineducer")
            return {
                ...state,
                userName: action.payload,
                isAdmin: true
            }
          default:
            return state;
        }
};

