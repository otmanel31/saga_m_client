export const FETCH_START = '@search/FETCH_START'
export const FETCH_SUCCESS = '@search/FETCH_SUCCESS'
export const FETCH_ERROR = '@search/FETCH_ERROR'


export const sendReq = () => ({
    type: 'api',
    method: 'GET',
    types: [FETCH_START, FETCH_SUCCESS, FETCH_ERROR],
    promise: (apiClient) => apiClient('events/type_event')
})

export const sendForm = (type, text, img) => (dispatch) => {
 // construit formatata    
    let form_data = new FormData()
    form_data.append('type', type)
    form_data.append('text_event', text)
    form_data.append('file', img)
    return dispatch({
        type: 'api',
        method: 'post',
        body: form_data,
        types: [FETCH_START, FETCH_SUCCESS, FETCH_ERROR],
        promise: (apiClient) => apiClient('events')
    })
}
