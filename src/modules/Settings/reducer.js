import {
    SET_STATE_GPS,
} from './action';


export const initialState = {
    onGPS: false
}

export const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case SET_STATE_GPS:
            return {
                ...state,
                onGPS: action.state_GPS
            }

        default: return state;

    }
}

export default reducer