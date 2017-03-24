import { getState } from 'react-redux'

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

    let myInit = {
        method: action.method,
        headers: myHeaders
    }

    const toFetch = (url) => {
        //const baseUrl = 'http://10.0.2.2:8080/' //--> pour emulateur android
        const baseUrl = 'http://localhost:8080/' // --> Pour browser
        return fetch(baseUrl + url, myInit)
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