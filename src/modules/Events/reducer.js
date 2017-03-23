import {FETCH_SUCCES, FETCH_ERROR, LOCAL_SUCCES} from './action'

const initialState = {
    result: [],
    img: null
}
const reducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_ERROR:
            return{
                ...state,
                query: action.payload
            }
        case FETCH_SUCCES:
            return{
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}

export default reducer