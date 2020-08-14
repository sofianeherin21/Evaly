import React, {Component} from 'react';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailsComponent';
import { CATEGORIES } from '../shared/Categories';
import { ADS } from '../shared/Ads';
import { Highlights } from '../shared/Highlights';
import { SHOPS } from '../shared/Shops';
import { PRODUCTS } from '../shared/Products';

class Main extends Component {

	constructor(props)
	  {
	    super(props);

	    this.toggleDrop = this.toggleDrop.bind(this);


	    this.state=
	    {
	      lists:CATEGORIES,
	      ads:ADS,
	      highlights:Highlights,
	      shops:SHOPS,
	      products:PRODUCTS,

	      dropdownOpen: false,
		  selectedProduct: null
	    };
	  }

	toggleDrop() {
		this.setState({dropdownOpen: !this.state.dropdownOpen});
	}

	onProdSelect(prod){
		this.setState({selectedProduct:prod});
	}



	  render(){

	  	return (
		    <div>
		      <Header lists={this.state.lists}/>
		      <Home lists={this.state.lists}  ads={this.state.ads} items={this.state.highlights} shops={this.state.shops}/>
		      <Product products={this.state.products}/>
		      <Footer/>
		    </div>
		  );

	  }
  
}

export default Main;
