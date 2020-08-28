import React, {Component} from 'react';
import { Card,CardBody,CardImg,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import { baseUrl } from '../shared/baseUrl';

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


	renderItem(items,id){
		
		if(items)
		{
			const pro=items.map((item)=>{
				return(
					
					<Card key={item.id} onClick={()=>this.onProdSelect(item)} id="product" className="col-6 col-md-3">
						<Link to={`/products/${id}/${item.id}`}>
							<CardBody>
								<CardImg src={baseUrl+item.img} className="card-top" alt={item.name}/>
								<CardTitle><h6>{item.name}</h6></CardTitle>
								<p>৳{item.price}</p>
							</CardBody>
						</Link>
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
					{this.renderItem(product.items,product.id)}
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
		        
	        </React.Fragment>


		);
	}	

}


export default Product;