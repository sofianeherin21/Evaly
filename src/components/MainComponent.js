import React, {Component} from 'react';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ShopDetail from './ShopDetail';
import ShopComponent from './ShopComponent';
import { CATEGORIES } from '../shared/Categories';
import { ADS } from '../shared/Ads';
import { Highlights } from '../shared/Highlights';
import { SHOPS } from '../shared/Shops';
import { PRODUCTS } from '../shared/Products';
import { AllShops } from '../shared/AllShops';
import { Switch, Route, Redirect } from 'react-router-dom';

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
	      allshops: AllShops,

	      dropdownOpen: false,
		  selectedShop: null,
		  selectedProd:null
	    };
	  }

	toggleDrop() {
		this.setState({dropdownOpen: !this.state.dropdownOpen});
	}

	onShopSelect(shop){
		this.setState({selectedShop:shop});
	}




	  render(){

	  	const ShopWithId = ({match}) => {
	      return(
	          <ShopDetail shop={this.state.allshops.filter((shop) => shop.id === parseInt(match.params.shopId,10))[0]} products={this.state.products} lists={this.state.lists}  />
	      );
	    };

	  	return (
		    <div>
		      <Header lists={this.state.lists}/>
			      <Switch>
		              <Route path='/home' component={()=> <Home lists={this.state.lists}  ads={this.state.ads} items={this.state.highlights} shops={this.state.shops} products={this.state.products}/>} />
		              <Route exact path='/products' component={() => <Product products={this.state.products} />} />
		              <Route exact path='/shops' component={()=> <ShopComponent allshops={this.state.allshops}/>}/>
		              <Route path='/shops/:shopId' component={ShopWithId} />
		              
		              <Redirect to="/home" />
		          </Switch>
		     
		      <Footer/>
		    </div>
		  );

	  }
  
}

export default Main;
