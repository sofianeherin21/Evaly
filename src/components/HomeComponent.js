import React, {Component} from 'react';
import { ListGroup, ListGroupItem,Card,CardBody,CardImg,CardTitle,CardOverlay } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Home extends Component{

	constructor(props)
	{
		super(props);
		this.state=
		{
			
		};
	}	

	renderCategory(lists)
	{
		if(lists)
		{

			const category = lists.map((cat) =>{
					
					return(
						<div>
							<ListGroupItem>{cat.name} <span className="fa fa-angle-right pull-right"></span></ListGroupItem>
						</div>
	                  );

				});
		}
		else{
			return(
			<div>Data Not Found</div>);
		}
	}

	render()
	{

		const category = this.props.lists.map((cat) =>{
					
					return(
						<ListGroupItem>{cat.name} <span className="fa fa-angle-right pull-right"></span></ListGroupItem>
						
	                  );

				});

		const carousel = this.props.ads.map((ad)=>{

			return(
					<img src={ad.url} className="sliderimg img-responsive img-fluid" alt={ad.name}/>
				);
		});

		const highlights = this.props.items.map((item)=>{

			return(

					<Card style={{height:"15em"},{overflow:"hidden"}} className="col-12 col-md-6">
		                <div className="row">
		                    <div className="col-8">
		                        <CardBody>
		                            <p>{item.brand}<span className="badge badge-primary"> NEW</span></p>
		                            <h6 className="card-title text-md">{item.name}</h6>
		                            <p className="text-sm text-gray-600">{item.category}<br/>
		                    	        Starting at<br/>
		                        	    ৳ {item.price}
		                            </p>
		                        </CardBody>
		                    </div>
		                    <CardImg style={{height:"20%"},{padding:"0"}} className="col-4 img-responsive img-fluid" src={item.img}/>
		                </div>
		            </Card>


			);

		});

	const shops=this.props.shops.map((shop)=>{

		return(

				<div className="col-6 col-md-4 row-content">
	                <img src={shop.img} className="d-block img-responsive img-fluid"/>
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
	                			<AliceCarousel dotsDisabled={true} buttonsDisabled={true} autoPlay autoPlayInterval="3000" >
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
	        </React.Fragment>

		);

	}

	


}


export default Home;