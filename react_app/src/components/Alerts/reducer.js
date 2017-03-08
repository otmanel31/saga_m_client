import {FETCH_ALERTS,
        FETCH_ALERTS_START,
        FETCH_ALERTS_SUCCESS,
        FETCH_ALERTS_ERROR,
        ACK_ALERTS_START,
        ACK_ALERTS_SUCCESS,
        ACK_ALERTS_ERROR


} from './action';


export const initialState = {
    alerts: []
}

export const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case FETCH_ALERTS_SUCCESS:
            return {
                ...state,
                alerts: action.payload
            }

        case ACK_ALERTS_SUCCESS:
            return {
                ...state,
                //alerts: action.payload
            }
        default: return state;

    }
}

export default reducer