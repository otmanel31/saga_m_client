import { push } from 'react-router-redux';
import { checkHttpStatus, parseJSON } from '../../lib/utils'

export const LOGIN = '@alerts/LOGIN'

export const LOGIN_START = '@alerts/LOGIN_START'
export const LOGIN_SUCCESS = '@alerts/LOGIN_SUCESS'
export const LOGIN_ERROR = '@alerts/LOGIN_ERROR'

export function loginSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginError(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_ERROR,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginRequest() {
  return {
    type: LOGIN_START
  }
}

export function login(email, password, redirect="/") {
    return function(dispatch) {
        dispatch(loginRequest());
        return fetch('http://localhost:4000/auth/getToken/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({email: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(loginSuccess(response.token));
                    dispatch(push(null, redirect));
                } catch (e) {
                    dispatch(loginError({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginError(error));
            })
    }
}


