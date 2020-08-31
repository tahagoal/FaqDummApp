import * as ActionTypes from './ActionTypes';

export const detFReducer = (state = {
    pending: true,
    err: null,
    details: []
    }, action:any) => {
    switch (action.type) {
        case ActionTypes.Fetch_DetF:
            // return action.payload;
            return {...state, pending: false, err: null, details: action.payload};
        case ActionTypes.DetF_LOADING:
            return {...state, pending:true, err:null, details:[]}
        case ActionTypes.DetF_FAILED:
            return {...state, pending:false, err:action.payload, details:[]}
        default:
            return state
    }
}