import React, {Component} from 'react';
import { ListGroup, ListGroupItem,Card,CardBody,CardImg,Button } from 'reactstrap';
import Product from './ProductComponent';

class ShopDetail extends Component{

	renderCover(shop){
		if(shop!=null)
		{
			return(

					<div className="d-md-flex flex-sm-col flex-md-row mt-5 ">
						<div className="w-full mr-4 rounded-lg mx-lg:mb-4 lg:w-8/12 xl:w-9/12">
							<img src={shop.img} className="img-fluid" alt="cover"/>
						</div>
						<div className="d-md-flex flex-md-row w-full bg-white rounded-lg lg:w-4/12 xl:w-3/1">
							<div className="p-4 flex">
								<div className="d-inline-flex mt-2">
									<img src={shop.logo} width="80em" className="img-responsive overflow-hidden" alt="logo"/>
								</div>
								<div className="flex-1">
									<div className="flex justify-between">
										<h2 className="font-bold mx-lg:mb-4">{shop.name}</h2>
									</div>
									<div className="lg:hidden">
										<div className="flex">
											<div><span className="fa fa-map-marker">{` ${shop.address}`}</span></div>
											
										</div>
										<div className="flex flex-row">
											<div className="mr-2"><span className="fa fa-phone">{` ${shop.contact}`}</span></div>
											
										</div>
										<div className="flex">
											<div className="mr-2"><span className="fa fa-bell">Follower:400</span></div>
											
										</div>
									</div>
								</div>
								<div className="p-2">
									<Button block color="danger">Follow</Button>
								</div>
							</div>
							

						</div>
					</div>

				);

		}
		else{
			return(
				<div>Nothing</div>);
		}
	}

	render(){

		const category = this.props.lists.map((cat) =>{
					
					return(
						<ListGroupItem key={cat.id}>{cat.name} <span className="fa fa-angle-right pull-right"></span></ListGroupItem>
						
	                  );

				});

		return(

			<React.Fragment>

				<div className="container">
					{this.renderCover(this.props.shop)}
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 mt-5 py-2' id="category">
							<ListGroup>
								{category}
							</ListGroup>
						</div>
						<div className='col-md-9'>
							<Product products={this.props.products}/>
						</div>
					</div>

				</div>
				


			</React.Fragment>



			);
	}

}

export default ShopDetail;