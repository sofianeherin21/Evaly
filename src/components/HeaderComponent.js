import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav,NavItem, NavLink,
    Button, Input,Popover,PopoverHeader, PopoverBody} from 'reactstrap';
import {POPS} from '../shared/Popovers.js' 

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.togglePopover = this.togglePopover.bind(this);

        this.state = {
            isNavOpen: false,
            isPopoverOpen: false,
            pops:POPS,
           
        };

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    togglePopover() {
        this.setState({
          isPopoverOpen: !this.state.isPopoverOpen
        });
      }
    
    renderPops=(pop)=>{
    		return(
    			
		        <Popover placement="bottom" triggers="click" isOpen={this.state.isPopoverOpen} target={pop.target} toggle={this.togglePopover}>
					<PopoverHeader>{pop.title}</PopoverHeader>
				        <PopoverBody className="offset-3">
				        	<img src={pop.img} className="img img-responsive img-fluid" alt="pic"/>
				        	<h6 className="text-align-center">Your Cart is Empty!</h6>
				        </PopoverBody>
			    </Popover>
		    
		    );

    }


render()
{
	
	
    return (
        <React.Fragment>
            <div className="container" id="notification">

                <div className="row">

                    <Navbar light expand="xs" className="fixed-top">
                        <div className="container">

                            <NavbarBrand>
                                <img src="assets/img/logo.png" height="70" width="90" alt="logo" />
                            </NavbarBrand>
                            <NavItem className="list-unstyled float-right mr-0">
                                <NavLink className="nav-link"><span className="fa fa-user fa-lg"></span></NavLink>
                            </NavItem>
                            <div className="input-group" >
                                <Input className="form-control red-border" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                            <div className="input-group-append">
                                <Button type="submit" className=" btn btn-danger btn-lg input-group-text"><span className="fa fa-search"></span></Button>
                            </div>

                            <div id="bottom">
                                <Nav navbar className= "mr-auto">
                                    <NavItem>
                                        <NavLink id="Popover1" >{this.renderPops(this.state.pops[0])}<span className="fa fa-shopping-cart fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" id="Popover2" ><span className="fa fa-bell fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" id="Popover3"><span className="fa fa-comment fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" id="Popover4"><span className="fa fa-user fa-lg"></span></NavLink>
                                    </NavItem>
                                </Nav>
                            </div>

                        </div>
                    </Navbar>
                </div>
            </div>

            

            <div className="container-fluid fixed-bottom" id="hidden-notify">

                    
                    <div className="row" id="bottom2">
	                    <ul className="list-unstyled align-items-center">
	                    	<li><span className="fa fa-shopping-cart fa-lg"></span></li>
	                    	<li><span className="fa fa-bell fa-lg"></span></li>
	                    	<li><span className="fa fa-comment fa-lg"></span></li>
	                    </ul>
	                </div>
                

            </div>

            <div className="container" id="nav">

                <div className="row">

                    <div className="container">
	                    <Navbar light expand="sm" className="col-10" >
	                        <Navbar expand="sm" className="list-unstyled">

	                        	<Button className="navbar-light btn-default" type="button"><span className="navbar-toggler-icon"></span></Button>
	                            <NavItem ><NavLink className="nav-link"> All Shops</NavLink></NavItem>
	                            <NavItem ><NavLink className="nav-link"> Gift Cards</NavLink></NavItem>
	                            <NavItem ><NavLink className="nav-link"> Campaigns</NavLink></NavItem>
	                            <NavItem ><NavLink className="nav-link"> Premiun Deal</NavLink></NavItem>
	                        </Navbar>

	                    </Navbar>
	                </div>


                </div>


            </div>

        </React.Fragment>);
    }
}

export default Header;