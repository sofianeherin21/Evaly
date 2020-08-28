import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Categories } from './categories';
import { Ads } from './ads';
import { highlights } from './highlights';
import { Shops } from './shops';
import { Products } from './products';
import { allshops } from './allshops';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
              categories:Categories,
		      ads:Ads,
		      highlights:highlights,
		      shops:Shops,
		      products:Products,
		      allshops: allshops
        }),
        applyMiddleware(thunk, logger) 
    );
    

    return store;
}