import React, {Component} from 'react';
import {Card,Dropdown,DropdownItem,DropdownToggle,DropdownMenu,Button } from 'reactstrap';

class ProductDetail extends Component{

	constructor(props){
		super(props);

		this.toggleDrop = this.toggleDrop.bind(this);

		this.state= {
			dropdownOpen: false,
			dropValue:'1'
		}
	}
	toggleDrop() {
		this.setState({dropdownOpen: !this.state.dropdownOpen});
	}
	onDropValueSelect(value)
	{
		this.setState({dropValue:value});
	}

	renderProduct(prod)
	{
		if(prod!=null)
		{
			return(
				
					<Card>
						<div className="container" id="prodetail">
							<div className="row">
								<div className="col-12 col-sm-6">
									<img src={prod.img} className="img-fluid" alt={prod.name}/>
								</div>
								<div className="col col-sm">
									<h1>{prod.name}</h1>
									<div className="row-content"><h3> ৳{prod.price}</h3></div>
									<h6>Quantity</h6>
									<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop}>
								      <DropdownToggle caret>
								        <span>{this.state.dropValue}</span>
								        </DropdownToggle>
								      <DropdownMenu>
								        <DropdownItem onClick={()=>this.onDropValueSelect('1')}>1</DropdownItem>
								        <DropdownItem onClick={()=>this.onDropValueSelect('2')}>2</DropdownItem>
								        <DropdownItem onClick={()=>this.onDropValueSelect('3')}>3</DropdownItem>
								        <DropdownItem onClick={()=>this.onDropValueSelect('4')}>4</DropdownItem>
								        <DropdownItem onClick={()=>this.onDropValueSelect('5')}>5</DropdownItem>
								      </DropdownMenu>
								    </Dropdown>
								    <br/>
								    <Button size="lg" block color="danger">Add to Cart</Button>
								    <div className="row-content">
								    Two-way zip opening into two main compartment, zip opening into two front compartments, side mesh pockets, padded laptop compartment inside main compartment

								    </div>
								</div>
							</div>
						</div>
					</Card>
				
				);
		}
		else
		{
			return(
				<div></div>);
		}
	}

	render(){
		return(

		<div className="container">
			{this.renderProduct(this.props.product)}
		</div>


		);
	}
}

export default ProductDetail;