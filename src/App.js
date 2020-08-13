import React, {Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import { CATEGORIES } from './shared/Categories';
import { ADS } from './shared/Ads';
import { Highlights } from './shared/Highlights';
import { SHOPS } from './shared/Shops';
import { PRODUCTS } from './shared/Products';

class App extends Component {

	constructor(props)
	  {
	    super(props)
	    this.state=
	    {
	      lists:CATEGORIES,
	      ads:ADS,
	      highlights:Highlights,
	      shops:SHOPS,
	      products:PRODUCTS
	    };
	  }
	  render(){

	  	return (
		    <div className="App">
		      <Header lists={this.state.lists}/>
		      <Home lists={this.state.lists}  ads={this.state.ads} items={this.state.highlights} shops={this.state.shops} products={this.state.products}/>
		      <Footer/>
		    </div>
		  );

	  }
  
}

export default App;
