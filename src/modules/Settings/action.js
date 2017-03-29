export const SET_STATE_GPS = '@setting/SET_STATE_GPS'
export const POST_GPS_START = '@setting/POST_GPS_START'
export const POST_GPS_SUCCESS = '@setting/POST_SUCCESS'
export const POST_GPS_ERROR = '@setting/POST_GPS_ERROR'


export const setGPS = (state_GPS) => ({
    type: SET_STATE_GPS,
    state_GPS : state_GPS
})

export const postApiLocation = (payload, uid_users) => ({
    type: 'api',
    method: 'POST',
    body: payload,
    types: [POST_GPS_START, POST_GPS_SUCCESS, POST_GPS_ERROR],
    promise: (api) => api(`location/${uid_users}`)
})



