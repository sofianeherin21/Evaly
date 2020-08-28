import * as ActionTypes from './ActionTypes';

export const allshops = (state = { isLoading: true,
    errMess: null,
    allshops:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ALLSHOPS:
            return {...state, isLoading: false, errMess: null, allshops: action.payload};

        case ActionTypes.ALLSHOPS_LOADING:
            return {...state, isLoading: true, errMess: null, allshops: []};

        case ActionTypes.ALLSHOPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,allshops: []};

        default:
            return state;
    }
};