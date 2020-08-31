import * as ActionTypes from './ActionTypes';
import { Faq } from '../models/models';

export const faqReducer = (state = {
    pending: true,
    err: null,
    faqs: [] as Faq[]
    }, action:any) => {
    switch (action.type) {
        case ActionTypes.Fetch_Faqs:
            return {...state, pending: false, err: null, faqs: action.payload};
        case ActionTypes.Faqs_LOADING:
            return {...state, pending:true, err:null, faqs:[]}
        case ActionTypes.Faqs_FAILED:
            return {...state, pending:false, err:action.payload, faqs:[]}
        default:
            return state
    }
}