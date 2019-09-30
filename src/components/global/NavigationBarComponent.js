import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './NavigationBarComponent.css'
import logo from '../../aerobot.png';

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
            document.getElementById("navigationbar").style.top = "-200px";
        }
    }
    
    // The Navigation Bar disappears when scrolling downwards and viceversa.
    render() {
        return (
            <div className="navigationBox">
                <Navbar id="navigationbar" className="navigationBar" color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img src={logo} width="50" height="50" alt="React Bootstrap Logo"/>
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/Ayuda/">Ayuda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Ingreso/">Inicio de Sesión</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Registro/">Registrarse</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;