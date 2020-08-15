import React, {Component} from 'react';
import { CardBody,CardImg,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'

class ShopComponent extends Component{


	constructor(props){
		super(props);

		

		this.state= {
			selectedShop: null
		}
	}
	
	onShopSelect(shop){
		this.setState({selectedShop:shop});
	}


	renderItem(items){
		
		if(items)
		{
			const pro=items.map((item)=>{
				return(
					<div key={item.id} className="bg-white border-gray-300 m-2 d-flex flex-row overflow-hidden">
						<Link to={`/shops/${item.id}`}>
						<div className="flex-wrap overflow-hidden">
							<div className="d-flex p-2 justify-content-center">
								<img style={{width:"auto"},{height:"10rem"}} src={item.logo} className="card-top img-responsive img-fluid" alt={item.name}/>
							</div>
							<div className="p-3 overflow-hidden">
								<CardTitle><h6>{item.name}</h6></CardTitle>
							</div>
							
						</div>
						</Link>
					</div>
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
		
		return(
			<React.Fragment>
				<div className="container">
		        	<div className="flex-row p-2 justify-content-center">
		        		<h3 className="d-flex">Shops</h3>
		        		{this.renderItem(this.props.allshops)}
		        	</div>
		        </div>
		        
		        
	        </React.Fragment>


		);
	}	

}


export default ShopComponent;