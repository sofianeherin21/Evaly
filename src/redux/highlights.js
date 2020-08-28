import * as ActionTypes from './ActionTypes';

export const highlights = (state = { isLoading: true,
    errMess: null,
    highlights:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HIGHLIGHTS:
            return {...state, isLoading: false, errMess: null, highlights: action.payload};

        case ActionTypes.HIGHLIGHTS_LOADING:
            return {...state, isLoading: true, errMess: null, highlights: []};

        case ActionTypes.HIGHLIGHTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,highlights: []};

        default:
            return state;
    }
};