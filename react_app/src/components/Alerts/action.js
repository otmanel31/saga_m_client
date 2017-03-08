export const FETCH_ALERTS = '@alerts/FETCH_ALERTS'

export const FETCH_ALERTS_START = '@alerts/FETCH_ALERTS_START'
export const FETCH_ALERTS_SUCCESS = '@alerts/FETCH_ALERTS_SUCESS'
export const FETCH_ALERTS_ERROR = '@alerts/FETCH_ALERTS_ERROR'

export const ACK_ALERTS_START = '@alerts/ACK_ALERTS_START'
export const ACK_ALERTS_SUCCESS = '@alerts/ACK_ALERTS_SUCESS'
export const ACK_ALERTS_ERROR = '@alerts/ACK_ALERTS_ERROR'

export const fetchApiAlert = () => ({
    type: 'api',
    method: 'GET',
    types: [FETCH_ALERTS_START, FETCH_ALERTS_SUCCESS, FETCH_ALERTS_ERROR],
    promise: (api) => api(`alerts/self/`)
})

export const ackApiAlert = (alertId) => ({
    type: 'api',
    method: 'PATCH',
    types: [ACK_ALERTS_START, ACK_ALERTS_SUCCESS, ACK_ALERTS_ERROR],
    promise: (api) => api(`alerts/self/ack/${alertId}`)
})

