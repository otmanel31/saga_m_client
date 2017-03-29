import { getState } from 'react-redux'
import { baseURL } from './../config/api'

const api = store => next => action => {
    if (action.type !== 'api') return next(action)

    //else 
    const dispatch = store.dispatch;
    const types = action.types;
    const [START, SUCCESS, ERROR] = types;
    const promise = action.promise;

    dispatch({
        type: START
    })

    //********************************/
    // For test
    //********************************/

    /*var Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7InRva2VuR0NNIjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsidG9rZW5HQ00iOnRydWUsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7InRva2VuR0NNIjoiIiwiYWRtaW4iOmZhbHNlLCJwYXNzd29yZCI6InBhc3N3b3JkIiwibmFtZSI6IkJhciIsIl9pZCI6IjU4ZDNhNzc5ZTkyMGNlYmYxOTkwOTc2OSJ9LCJpYXQiOjE0OTAyNjcxNjcsImV4cCI6MTQ5MDM1MzU2N30.07VFYR18Ko2B-GUy4rLy-E5PjAh2VsZx1m7ZJzW4ZQU"
    */
    var token = store.getState().auth.token


    const myHeaders = new Headers();
    myHeaders.append('Authorization', "Bearer " + token);
    myHeaders.append('Content-type', "application/json");

    let myInit = {
        method: action.method,
        headers: myHeaders,
        body: action.body
    }
/* const toFetch = (url, options = {}) => {
        //const baseUrl = 'http://10.0.2.2:8080/' //--> pour emulateur android
        const baseUrl = 'http://127.0.0.1:8080/' // --> Pour browser
        return fetch( baseUrl + url, myInit)
        body: JSON.stringify(action.body),
    }*/

    const toFetch = (url) => {
        return fetch(baseURL + url, myInit)
    }

    promise(toFetch)
        .then(result => {
            if (result.ok) {
                if (action.method === 'GET') {
                    result.json().then(data => {
                        dispatch({
                            type: SUCCESS,
                            payload: data
                        })
                    })
                } else { // other method
                    dispatch({
                        type: SUCCESS,
                    })
                }

            } else {
                dispatch({
                    type: ERROR,
                    payload: result
                })
            }
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: ERROR,
                payload: error
            })
        })
}

export default api;