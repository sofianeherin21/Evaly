import {createStore,combineReducers} from 'redux';
import { Categories } from './categories';
import { Ads } from './ads';
import { highlights } from './highlights';
import { Shops } from './shops';
import { Products } from './products';
import { allshops } from './allshops';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
              lists:Categories,
		      ads:Ads,
		      highlights:highlights,
		      shops:Shops,
		      products:Products,
		      allshops: allshops
        }) 
    );

    return store;
}