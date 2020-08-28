import * as ActionTypes from './ActionTypes';

export const Shops = (state = { isLoading: true,
    errMess: null,
    shops:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOPS:
            return {...state, isLoading: false, errMess: null, shops: action.payload};

        case ActionTypes.SHOPS_LOADING:
            return {...state, isLoading: true, errMess: null, shops: []};

        case ActionTypes.SHOPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,shops: []};

        default:
            return state;
    }
};