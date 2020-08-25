import * as ActionTypes from './ActionTypes';
import { ADS } from '../shared/Ads';



export const fetchAds = () => (dispatch) => {

    dispatch(adsLoading(true));

    setTimeout(() => {
        dispatch(addAds(ADS));
    }, 2000);
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