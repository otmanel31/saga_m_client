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
    var Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJ0b2tlbkdDTSI6ImluaXQiLCJhZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwidG9rZW5HQ00iOnRydWUsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwidG9rZW5HQ00iOiJkQ1h1bzNfZmFzTTpBUEE5MWJIRkVKNDhWU2ZoMFZ1T25XSWRzdVY3ZVRKWnFuRE1paDVjZ2dVelh0TXpzVkhMWHVTTDh5V3dWTE5iaUpvdVdTd3NoTmpuZDJWdUhrcEt1R2dVTTF1c1ZxZEp5T1FHLXdJOGFUOGthWUJuZEtPZlhTb0RnSlhxM19oNnFLN2p5RjA1VVZYcSIsImFkbWluIjpmYWxzZSwicGFzc3dvcmQiOiJwYXNzd29yZCIsIm5hbWUiOiJCYXIiLCJfaWQiOiI1OGFmMDg3ZGYyYmE3MDRhNjZkZTM0MjUifSwiaWF0IjoxNDg5NTkxODM4LCJleHAiOjE0OTA0NTU4Mzh9.x5JQ5MfQsLUVWwwFsYVzRJi86882pWP2KPi2tIn--R8"

    const myHeaders = new Headers();
    myHeaders.append('Authorization', "Bearer " + Token);

    let myInit = {
        method: action.method,
        headers: myHeaders,
        body: action.body
    }

    const toFetch = (url, options = {}) => {
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