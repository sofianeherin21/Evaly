import React, { Component } from 'react';
import {Navbar, Nav,NavItem,Button, Input,Popover,PopoverHeader, PopoverBody,Modal, ModalHeader, ModalFooter, ModalBody,ListGroup,ListGroupItem } from 'reactstrap';
import {POPS} from '../shared/Popovers.js'; 
import { NavLink,Link } from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl'

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.togglePopover = this.togglePopover.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isModalOpen: false,
            isNavOpen: false,
            isPopoverOpen: false,
            pops:POPS,
           
        };

    }


     toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
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

                <div className="row bg-white">
                	<div className="container-fluid bg-white fixed-top lukao">
                		<div className="flex-row w-full justify-content-sm-end">
	                    	<Button className="navbar-light btn-default float-left md:hidden" size="sm" type="button"><span className="navbar-toggler-icon"></span></Button>
		                    <NavItem className="list-unstyled float-right mr-0">
		                        <NavLink className="nav-link" to='/nolink5'><span className="fa fa-user fa-lg"></span></NavLink>
		                    </NavItem>
		                </div>
                	</div>

                    <Navbar light expand="xs" className="fixed-top" id="notificationbar">
                    	
                        <div className="container justify-content-sm-center">

                        	<Link to='/home'>

	                            
	                                <img src={baseUrl+"img/logo.png"} height="70" width="90" className="p-2 " alt="logo" />
	                            
                            </Link>
                            
                            <div className="input-group" >
                                <Input className="form-control red-border" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                            <div className="input-group-append">
                                <Button type="submit" className=" btn btn-danger btn-lg input-group-text"><span className="fa fa-search"></span></Button>
                            </div>


                            <div id="bottom">
                                <Nav navbar className= "mr-auto">
                                    <NavItem>
                                        <NavLink className="nav-link" id="Popover1" to='/nolink' >{this.renderPops(this.state.pops[0])}<span className="fa fa-shopping-cart fa-lg"></span></NavLink>

                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" id="Popover2" to='/nolink2' ><span className="fa fa-bell fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" id="Popover3" to='/nolink3' ><span className="fa fa-comment fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" id="Popover4" to='nolink4' ><span className="fa fa-user fa-lg"></span></NavLink>
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
	                    	<li className="nav-link"><span className="fa fa-home fa-lg"></span></li>
	                    	<li className="nav-link"><span className="fa fa-shopping-cart fa-lg"></span></li>
	                    	<li className="nav-link"><span className="fa fa-bell fa-lg"></span></li>
	                    	<li className="nav-link"><span className="fa fa-comment fa-lg"></span></li>
	                    </ul>
	                </div>
                

            </div>

            <div className="container" id="nav">

                <div className="row">

                    <div className="container">
	                    <Navbar light expand="sm" className="col-10" >
	                        <Navbar expand="sm" className="list-unstyled">

	                        	<Button className="navbar-light btn-default" type="button" onClick={this.toggleModal}><span className="navbar-toggler-icon"></span></Button>
	                            <NavItem ><NavLink className="nav-link" to='/shops'> All Shops</NavLink></NavItem>
	                            <NavItem ><NavLink className="nav-link" to='/gifts' > Gift Cards</NavLink></NavItem>
	                            <NavItem ><NavLink className="nav-link" to='/campaigns' > Campaigns</NavLink></NavItem>
	                            <NavItem ><NavLink className="nav-link" to='/deal' > Premiun Deal</NavLink></NavItem>
	                        </Navbar>

	                    </Navbar>
	                </div>


                </div>


            </div>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                    <ModalHeader toggle={this.toggleModal}>
                        <img src={baseUrl+"img/logo.png"}/>
                    </ModalHeader>
                    <ModalBody>
                        <div class="subdiv">
                            <div class="flex-item">Balance</div>
                            <div class="flex-item">
                                <Button block className="btn-danger">Login</Button>
                            </div>
                        </div>
                        <div class="options">
                            <ListGroup>
                                <ListGroupItem>Shops<span className="fa fa-angle-right pull-right"></span></ListGroupItem>
                                <ListGroupItem>Evaly Express Shops<span className="fa fa-angle-right pull-right"></span></ListGroupItem>
                                <ListGroupItem>newsFeed<span className="fa fa-angle-right pull-right"></span></ListGroupItem>
                                <ListGroupItem>Gift Card<span className="fa fa-angle-right pull-right"></span></ListGroupItem>
                                <ListGroupItem>Campaigns<span className="fa fa-angle-right pull-right"></span></ListGroupItem>
                                <ListGroupItem>Orders<span className="fa fa-angle-right pull-right"></span></ListGroupItem>
                                <ListGroupItem>Vouchers<span className="fa fa-angle-right pull-right"></span></ListGroupItem>
                            </ListGroup>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    
                    </ModalBody>
                </Modal>

        </React.Fragment>);
    }
}

export default Header;