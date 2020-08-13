import React, {Component} from 'react';
import { ListGroup, ListGroupItem,Card,CardBody,CardImg,CardTitle } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Home extends Component{

	
	renderItem(items){
		
		if(items)
		{
			const pro=items.map((item)=>{
				return(
					<Card key={item.id} id="product" className="col-6 col-md-3">
						
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

		const category = this.props.lists.map((cat) =>{
					
					return(
						<ListGroupItem key={cat.id}>{cat.name} <span className="fa fa-angle-right pull-right"></span></ListGroupItem>
						
	                  );

				});

		const carousel = this.props.ads.map((ad)=>{

			return(
					<img key={ad.id} src={ad.img} className="sliderimg img-responsive img-fluid" alt={ad.name}/>
				);
		});

		const highlights = this.props.items.map((item)=>{

			return(

					<Card key={item.id} style={{height:"15em"},{overflow:"hidden"}} className="col-12 col-md-6">
		                <div className="row">
		                    <div className="card-left">
		                        <CardBody>

		                            <p>{item.brand}<span className="badge badge-primary"> NEW</span></p>
		                            <h6 className="card-title text-md">{item.name}</h6>
		                            <CardImg style={{height:"20%"},{padding:"0"},{width:"20%"}} className="ml-auto img-responsive img-fluid" src={item.img}/>
		                            <p className="col-5 text-sm text-gray-600">{item.category}<br/>
		                    	        Starting at<br/>
		                        	    ৳ {item.price}
		                            </p>
		                        </CardBody>
		                        
		                    </div>
		                    
		                </div>
		            </Card>


			);

		});

	const shops=this.props.shops.map((shop)=>{

		return(

				<div key={shop.id} className="col-6 col-md-4 row-content">
	                <img src={shop.img} className="d-block img-responsive img-fluid" alt="shops"/>
	            </div>

			);
	});

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
			        <div className="row row-content">

				        <div className="col-md-3" id="category">
							<ListGroup>
				                <ListGroupItem className="list-group-item-secondary">Top Category</ListGroupItem>
				                 {category}
				                  		
				            </ListGroup>
			            </div>

			        
			            
			            <div className="col-12 col-md-9">
	                		<div className="col-12" id="myCarousel">
	                			<AliceCarousel dotsDisabled={true} buttonsDisabled={true} autoPlay autoPlayInterval={3000} >
									{carousel}
								</AliceCarousel>
	                		</div>
	                		<div className="col-12">
			                    <div className="row row-content container">

			                        
			                            {highlights}
			                       
			                	</div>
			         		</div>
			         	</div>
			         </div>
			    </div>
			    <div className="container">
	        		<div className="row">
	        			{shops}
	        		</div>
	        	</div>

	        	<div className="container">
	        		<div className="row">
	        			{products}
	        		</div>
	        	</div>
	        </React.Fragment>

		);

	}

	


}


export default Home;