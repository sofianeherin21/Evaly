import React, {Component} from 'react';
import Product from './ProductComponent';
import { ListGroup, ListGroupItem,Card,CardBody,CardImg} from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


class Home extends Component{
	
	



	render()
	{

		const category = this.props.categories.map((cat) =>{
					
					return(
						<ListGroupItem key={cat.id}>{cat.name} <span className="fa fa-angle-right pull-right"></span></ListGroupItem>
						
	                  );

				});

		const carousel = this.props.ads.map((ad)=>{

			return(
					<img key={ad.id} src={baseUrl+ad.img} className="sliderimg img-responsive img-fluid" alt={ad.name}/>
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
		                            <CardImg style={{height:"20%"},{padding:"0"},{width:"20%"}} className="ml-auto img-responsive img-fluid" src={baseUrl+item.img}/>
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

				<div key={shop.id} id="shops" className="col-4 col-md-2 row-content">
	                <img src={baseUrl+shop.img} className="img-responsive img-fluid" alt="shops"/>
	            </div>

			);
	});

	
		
		if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.ads != null)
		{
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
			                    <div className="row container">

			                        
			                            {highlights}
			                       
			                	</div>
			         		</div>
			         	</div>
			         </div>
			    </div>
			    <div className="container">
	        		<div className="row shop-row">
	        			{shops}
	        		</div>
	        	</div>
	        	<Product products={this.props.products}/>
	        	

	        	
	        </React.Fragment>
	        );
		}

	}

	


}


export default Home;