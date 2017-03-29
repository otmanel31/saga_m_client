import {FETCH_SUCCESS, FETCH_ERROR, LOCAL_SUCCES} from './action'

export const initialState = {
    result: [],
    img: null
}
export const reducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_ERROR:
            return{
                ...state,
                query: action.payload
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}
export default reducer