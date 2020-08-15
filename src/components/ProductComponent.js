import React, {Component} from 'react';
import { Card,CardBody,CardImg,CardTitle } from 'reactstrap';
import ProductDetail from './ProductDetailsComponent';
import { Link } from 'react-router-dom'

class Product extends Component{


	constructor(props){
		super(props);

		

		this.state= {
			selectedProduct: null
		}
	}
	
	onProdSelect(prod){
		this.setState({selectedProduct:prod});
	}


	renderItem(items){
		
		if(items)
		{
			const pro=items.map((item)=>{
				return(
					<Card key={item.id} onClick={()=>this.onProdSelect(item)} id="product" className="col-6 col-md-3">
						
						<CardBody>
							<CardImg style={{height:"70%"}} src={item.img} className="card-top img-responsive img-fluid" alt={item.name}/>
							<CardTitle><h6>{item.name}</h6></CardTitle>
							<p>৳{item.price}</p>
						</CardBody>
					</Card>
					);
			});
			return(

				<div className="row">
					{pro}
				</div>

			);
		}
		else{
			return(
				<div></div>);
		}
	}


	render()
	{
		const products= this.props.products.map((product)=>{
			return(

				<div key={product.id} className="container">
					<h3>{product.category}</h3>
					{this.renderItem(product.items)}
				</div>


				);
		});
		return(
			<React.Fragment>
				<div className="container">
		        	<div className="product-row">
		        		{products}
		        	</div>
		        </div>
		        <ProductDetail product={this.state.selectedProduct}/>
	        </React.Fragment>


		);
	}	

}


export default Product;