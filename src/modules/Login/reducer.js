import {
    LOGIN,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './actions'

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
}

export const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case LOGIN_START:
            return {
                ...state,
                token: payload.token,
                userName: payload.userName,
                isAuthenticated: true,
                isAuthenticating: false,
                statusText: null
            }        
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                userName: payload.userName,
                isAuthenticated: true,
                isAuthenticating: false,
                statusText: 'You have been successfully logged in.'
            }

        case LOGIN_ERROR:
            return {
                ...state,
                token: null,
                userName: null,               
                isAuthenticated: false,
                isAuthenticating: false,
                statusText: `Authentication Error: ${payload.status} ${payload.statusText}`                
            }
        default: return state
    }
}

export default reducer