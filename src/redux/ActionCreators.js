import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';


export const fetchAds = () => (dispatch) => {

    dispatch(adsLoading(true));

    return fetch(baseUrl + 'ads')
    .then(response => response.json())
    .then(ads => dispatch(addAds(ads)));
}

export const adsLoading = () => ({
    type: ActionTypes.ADS_LOADING
});

export const adsFailed = (errmess) => ({
    type: ActionTypes.ADS_FAILED,
    payload: errmess
});

export const addAds = (ads) => ({
    type: ActionTypes.ADD_ADS,
    payload: ads
});