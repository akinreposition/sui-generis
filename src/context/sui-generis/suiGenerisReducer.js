import { 
    SEARCH_NATIVES,
    SET_SEARCH_FIELD,
    SET_LOADING    
} from '../types'

export const suiGenerisReducer = ( state, action ) => {
    switch(action.type){
        case SEARCH_NATIVES:
            return {
                ...state,
                searchNative: action.payload,
                loading: false
            };
        case SET_SEARCH_FIELD:
            return{
                ...state,
                onSearchChange: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default: 
            return state;
    }
}