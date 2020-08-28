import * as ActionTypes from './ActionTypes';


export const Categories = (state = { isLoading: true,
    errMess: null,
    categories:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CATEGORIES:
            return {...state, isLoading: false, errMess: null, categories: action.payload};

        case ActionTypes.CATEGORIES_LOADING:
            return {...state, isLoading: true, errMess: null, categories: []};

        case ActionTypes.CATEGORIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload,categories: []};

        default:
            return state;
    }
};