import { createStore, combineReducers, applyMiddleware } from 'redux';
import { faqReducer } from './faqs';
import thunk from 'redux-thunk';
import { Faq, detF } from '../models/models';
import { detFReducer } from './detailsF';
// import { Faqs } from './faqs';

export type AppState = {
    faqList: Faq[];
    detailsFList: detF[];
};

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            faqList: faqReducer,
            detailsFList: detFReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
}