import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';

/*FETCH ADS*/

export const fetchAds = () => (dispatch) => {

    dispatch(adsLoading(true));

    return fetch(baseUrl + 'ads')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(ads => dispatch(addAds(ads)))
    .catch(error => dispatch(adsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(highlights => dispatch(addHighlights(highlights)))
    .catch(error => dispatch(highlightsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(categories => dispatch(addCategories(categories)))
    .catch(error => dispatch(categoriesFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(products => dispatch(addProducts(products)))
    .catch(error => dispatch(productsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(shops => dispatch(addShops(shops)))
    .catch(error => dispatch(shopsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(allshops => dispatch(addAllShops(allshops)))
    .catch(error => dispatch(allshopsFailed(error.message)));
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