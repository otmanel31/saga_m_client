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
    var token = store.getState().auth.token

    const myHeaders = new Headers();
    myHeaders.append('Authorization', "Bearer " + token);
    myHeaders.append('Content-type', "application/json");

    let myInit = {
        method: action.method,
        headers: myHeaders,
        body: JSON.stringify(action.body),
    }

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