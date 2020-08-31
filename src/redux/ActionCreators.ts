import * as ActionTypes from './ActionTypes';


export const fetchAll = () => (dispatch:any) => {
    return fetch('http://localhost:3000/faqs').then( response => {
        if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
          }
    })
    .then(response => response.json())
    .then(response => {
        dispatch(addingFaqs(response))
    })
    .catch(error => {
        console.log(error);
    });
}

export const addingFaqs = (faqs:any) => ({
    type: ActionTypes.Fetch_Faqs,
    payload: faqs
});

export const faqsLoading = () => ({
    type: ActionTypes.Faqs_LOADING
});

export const faqsFailed = (err:any) => ({
    type: ActionTypes.Faqs_FAILED,
    payload: err
});





export const detailsFirst = (id:number) => (dispatch:any) => {
    return fetch(`http://localhost:3000/faqDetails?id=${id}`).then( response => {
        if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            throw error;
          }
    })
    .then(response => response.json())
    .then(response => {
        dispatch(addingDetailsF(response))
    })
    .catch(error => {
        console.log(error);
    });
}

export const addingDetailsF = (details:any) => ({
    type: ActionTypes.Fetch_DetF,
    payload: details
});

export const DetailsFLoading = () => ({
    type: ActionTypes.DetF_LOADING
});

export const DetailsFFailed = (err:any) => ({
    type: ActionTypes.DetF_FAILED,
    payload: err
});