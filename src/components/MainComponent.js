import React, {Component} from 'react';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailsComponent';
import ShopDetail from './ShopDetail';
import ShopComponent from './ShopComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchAds,fetchCategories,fetchShops,fetchAllShops,fetchProducts,fetchHighlights } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    categories:state.categories,
	ads:state.ads,
	highlights:state.highlights,
	shops:state.shops,
	products:state.products,
	
	allshops: state.allshops
  }
}

 const mapDispatchToProps = dispatch => ({
  
    fetchAds: () => { dispatch(fetchAds())},
    fetchHighlights: () => { dispatch(fetchHighlights())},
    fetchCategories: () => { dispatch(fetchCategories())},
    fetchShops: () => { dispatch(fetchShops())},
    fetchProducts: () => { dispatch(fetchProducts())},
    fetchAllShops: () => { dispatch(fetchAllShops())}   


  });


class Main extends Component {

	

	  componentDidMount() {
	    this.props.fetchAds();
	    this.props.fetchCategories();
	    this.props.fetchShops();
	    this.props.fetchAllShops();
	    this.props.fetchProducts();
	    this.props.fetchHighlights();

	  }



	  render(){

	  	const ShopWithId = ({match}) => {
	      return(
	          <ShopDetail shop={this.props.allshops.allshops.filter((shop) => shop.id === parseInt(match.params.shopId,10))[0]} products={this.props.products.products} categories={this.props.categories.categories}  />
	      );
	    };

	    const ProductWithId = ({match}) => {
	      return(
	          <ProductDetail product={this.props.products.products[parseInt(match.params.itemId)].items.filter((prod) => prod.id === parseInt(match.params.productId,10))[0]} />
	      );
	    };

	  	return (
		    <div>
		      <Header/>
			      <Switch>
		              <Route path='/home' component={()=> <Home categories={this.props.categories.categories}
		              isLoading={this.props.categories.isLoading}
			          errMess={this.props.categories.errMess}
		              ads={this.props.ads.ads}
		              isLoading={this.props.ads.isLoading}
			          errMess={this.props.ads.errMess}
			          items={this.props.highlights.highlights} 
			          isLoading={this.props.highlights.isLoading}
			          errMess={this.props.highlights.errMess}
			          shops={this.props.shops.shops}
			          isLoading={this.props.shops.isLoading}
			          errMess={this.props.shops.errMess} 
			          products={this.props.products.products}
			          isLoading={this.props.products.isLoading}
			          errMess={this.props.products.errMess}/>} />

		              <Route exact path='/products' component={() => <Product products={this.props.products.products} isLoading={this.props.products.isLoading}
			          errMess={this.props.products.errMess} />} />
		              
		              <Route exact path='/products/:itemId/:productId' component={ProductWithId} />
		              
		              <Route exact path='/shops' component={()=> <ShopComponent allshops={this.props.allshops.allshops} isLoading={this.props.allshops.isLoading}
			          errMess={this.props.allshops.errMess}/>}/>
		              
		              <Route path='/shops/:shopId' component={ShopWithId} />
		              
		              <Redirect to="/home" />
		          </Switch>
		     
		      <Footer/>
		    </div>
		  );

	  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));