import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink, Jumbotron,
    Button, Input} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false
        };

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


render()
{
    return (
        <React.Fragment>
            <div className="container" id="notification">

                <div className="row">

                    <Navbar light expand="sm" className="fixed-top">
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
                                        <NavLink ><span className="fa fa-shopping-cart fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" ><span className="fa fa-bell fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link"><span className="fa fa-comment fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link"><span className="fa fa-user fa-lg"></span></NavLink>
                                    </NavItem>
                                </Nav>
                            </div>

                        </div>
                    </Navbar>
                </div>
            </div>

            

            <div className="container-fluid" id="hidden-notify">

                    <Navbar light expand="sm" className="fixed-bottom">
                        <div className="container">

                            <div id="bottom2">
                                <Navbar as="ul" className="ml-auto list-unstyled align-items-center">
                                    <NavItem as="li">
                                        <NavLink ><span className="fa fa-shopping-cart fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem as="li">
                                        <NavLink className="nav-link" ><span className="fa fa-bell fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem as="li">
                                        <NavLink className="nav-link"><span className="fa fa-comment fa-lg"></span></NavLink>
                                    </NavItem>
                                    
                                </Navbar>
                            </div>

                        </div>
                    </Navbar>
                

            </div>

            <div classname="container" id="nav">

                <div className="row">

                    <Navbar light className="col-1">

                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar id="Navbar">
                            <Nav navbar classname="mr-auto">
                                <NavItem className="nav-item active"><NavLink className="nav-link" href="#"><span class="fa fa-home fa-lg"></span>Home</NavLink></NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" href="./aboutus.html"><span class="fa fa-info fa-lg"></span>About</NavLink></NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" href="#"><span class="fa fa-list fa-lg"></span>Menu</NavLink></NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" href="./contactus.html"><span class="fa fa-address-card fa-lg"></span>Contact</NavLink></NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Navbar light expand="sm" className="col-11" >
                        <Navbar nav expand="sm" className="list-unstyled">
                            <NavItem ><NavLink className="nav-link" href="#"> All Shops</NavLink></NavItem>
                            <NavItem ><NavLink className="nav-link" href="./aboutus.html"> Gift Cards</NavLink></NavItem>
                            <NavItem ><NavLink className="nav-link" href="#"> Campaigns</NavLink></NavItem>
                            <NavItem ><NavLink className="nav-link" href="./contactus.html"> Premiun Deal</NavLink></NavItem>
                        </Navbar>

                    </Navbar>


                </div>


            </div>

        </React.Fragment>);
    }
}

export default Header;