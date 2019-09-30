import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './NavigationBarComponent.css'
import logo from '../../aerobot.png';
import Landing from '../../components/landing/LandingComponent';
// import Login from './LoginComponent';
// import Register from './RegisterComponent';

class NavigationBar extends Component {
    // State holds the vertical position of the website for usage in hiding.
    constructor(props) {
        super(props);
        this.state = {
            previousOffset: window.pageYOffset,
            visible: true
        }
        
        this.handleScroll = this.handleScroll.bind(this);
    }

    // Adds and Removes the Scroll Event Listener.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Handles Scroll Action for usage in hiding.
    handleScroll() {
        const { previousOffset } = this.state;
        const currentOffset = window.pageYOffset;
        const visible = previousOffset > currentOffset;

        this.setState({previousOffset: currentOffset, visible});

        if (visible) {
            document.getElementById("navigationbar").style.top = "0";
        } else {
            document.getElementById("navigationbar").style.top = "-300px";
        }
    }
    
    // The Navigation Bar disappears when scrolling downwards and viceversa.
    render() {
        return (
            <div>
                <div className="navigationBox">
                    <Navbar id="navigationbar" className="navigationBar" color="light" light expand="md">
                        <NavbarBrand href="/">
                            <img src={logo} width="50" height="50" alt="React Bootstrap Logo"/>
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/inicio">Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/ingreso">Ingreso</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Registrarse</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/inicio" component={Landing} />
                            {/* <Route path="/ingreso" component={Login} /> */}
                            {/* <Route path="/registro" component={Register} /> */}
                            <Route component={Landing} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default NavigationBar;