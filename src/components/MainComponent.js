import React, {Component} from 'react';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailsComponent';
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
import { fetchAds } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    lists:state.lists,
	ads:state.ads,
	highlights:state.highlights,
	shops:state.shops,
	products:state.products,
	items:state.products[0].items,
	allshops: state.allshops
  }
}

 const mapDispatchToProps = dispatch => ({
  
    fetchAds: () => { dispatch(fetchAds())}

  });


class Main extends Component {

	constructor(props)
	  {
	    super(props);

	  }

	  componentDidMount() {
	    this.props.fetchAds();
	  }



	  render(){

	  	const ShopWithId = ({match}) => {
	      return(
	          <ShopDetail shop={this.props.allshops.filter((shop) => shop.id === parseInt(match.params.shopId,10))[0]} products={this.props.products} lists={this.props.lists}  />
	      );
	    };

	    const ProductWithId = ({match}) => {
	      return(
	          <ProductDetail product={this.props.products[parseInt(match.params.itemId)].items.filter((prod) => prod.id === parseInt(match.params.productId,10))[0]} />
	      );
	    };

	  	return (
		    <div>
		      <Header lists={this.props.lists}/>
			      <Switch>
		              <Route path='/home' component={()=> <Home lists={this.props.lists}  ads={this.props.ads.ads}
		              isLoading={this.props.ads.isLoading}
			          errMess={this.props.ads.errMess}
			          items={this.props.highlights} shops={this.props.shops} products={this.props.products}/>} />
		              <Route exact path='/products' component={() => <Product products={this.props.products} />} />
		              <Route exact path='/products/:itemId/:productId' component={ProductWithId} />
		              <Route exact path='/shops' component={()=> <ShopComponent allshops={this.props.allshops}/>}/>
		              <Route path='/shops/:shopId' component={ShopWithId} />
		              
		              <Redirect to="/home" />
		          </Switch>
		     
		      <Footer/>
		    </div>
		  );

	  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));