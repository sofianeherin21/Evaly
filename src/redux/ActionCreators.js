import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';

/*FETCH ADS*/

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



/*FETCH HIGHLIGHTS*/

export const fetchHighlights = () => (dispatch) => {

    dispatch(highlightsLoading(true));

    return fetch(baseUrl + 'highlights')
    .then(response => response.json())
    .then(highlights => dispatch(addHighlights(highlights)));
}

export const highlightsLoading = () => ({
    type: ActionTypes.HIGHLIGHTS_LOADING
});

export const highlightsFailed = (errmess) => ({
    type: ActionTypes.HIGHLIGHTS_FAILED,
    payload: errmess
});

export const addHighlights = (highlights) => ({
    type: ActionTypes.ADD_HIGHLIGHTS,
    payload:highlights
});



/*FETCH CATEGORIES*/

export const fetchCategories = () => (dispatch) => {

    dispatch(categoriesLoading(true));

    return fetch(baseUrl + 'categories')
    .then(response => response.json())
    .then(categories => dispatch(addCategories(categories)));
}

export const categoriesLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING
});

export const categoriesFailed = (errmess) => ({
    type: ActionTypes.CATEGORIES_FAILED,
    payload: errmess
});

export const addCategories = (categories) => ({
    type: ActionTypes.ADD_CATEGORIES,
    payload: categories
});




/*FETCH PRODUCTS*/

export const fetchProducts = () => (dispatch) => {

    dispatch(productsLoading(true));

    return fetch(baseUrl + 'products')
    .then(response => response.json())
    .then(products => dispatch(addProducts(products)));
}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});


/*FETCH SHOPS*/

export const fetchShops = () => (dispatch) => {

    dispatch(shopsLoading(true));

    return fetch(baseUrl + 'shops')
    .then(response => response.json())
    .then(shops => dispatch(addShops(shops)));
}

export const shopsLoading = () => ({
    type: ActionTypes.SHOPS_LOADING
});

export const shopsFailed = (errmess) => ({
    type: ActionTypes.SHOPS_FAILED,
    payload: errmess
});

export const addShops = (shops) => ({
    type: ActionTypes.ADD_SHOPS,
    payload: shops
});


/*FETCH ALLSHOPS*/

export const fetchAllShops = () => (dispatch) => {

    dispatch(allshopsLoading(true));

    return fetch(baseUrl + 'allshops')
    .then(response => response.json())
    .then(allshops => dispatch(addAllShops(allshops)));
}

export const allshopsLoading = () => ({
    type: ActionTypes.ALLSHOPS_LOADING
});

export const allshopsFailed = (errmess) => ({
    type: ActionTypes.ALLSHOPS_FAILED,
    payload: errmess
});

export const addAllShops = (allshops) => ({
    type: ActionTypes.ADD_ALLSHOPS,
    payload: allshops
});