import { CATEGORIES } from '../shared/Categories';
import { ADS } from '../shared/Ads';
import { Highlights } from '../shared/Highlights';
import { SHOPS } from '../shared/Shops';
import { PRODUCTS } from '../shared/Products';
import { AllShops } from '../shared/AllShops';



export const initialState = {
    	  lists:CATEGORIES,
	      ads:ADS,
	      highlights:Highlights,
	      shops:SHOPS,
	      products:PRODUCTS,
	      allshops: AllShops,

};

export const Reducer = (state = initialState, action) => {
    return state;
};