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
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    lists:state.lists,
	ads:state.ads,
	highlights:state.highlights,
	shops:state.shops,
	products:state.products,
	allshops: state.allshops
  }
}


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
		this.setprops({dropdownOpen: !this.state.dropdownOpen});
	}

	onShopSelect(shop){
		this.setprops({selectedShop:shop});
	}




	  render(){

	  	const ShopWithId = ({match}) => {
	      return(
	          <ShopDetail shop={this.props.allshops.filter((shop) => shop.id === parseInt(match.params.shopId,10))[0]} products={this.props.products} lists={this.props.lists}  />
	      );
	    };

	  	return (
		    <div>
		      <Header lists={this.props.lists}/>
			      <Switch>
		              <Route path='/home' component={()=> <Home lists={this.props.lists}  ads={this.props.ads} items={this.props.highlights} shops={this.props.shops} products={this.props.products}/>} />
		              <Route exact path='/products' component={() => <Product products={this.props.products} />} />
		              <Route exact path='/shops' component={()=> <ShopComponent allshops={this.props.allshops}/>}/>
		              <Route path='/shops/:shopId' component={ShopWithId} />
		              
		              <Redirect to="/home" />
		          </Switch>
		     
		      <Footer/>
		    </div>
		  );

	  }
  
}

export default withRouter(connect(mapStateToProps)(Main));
