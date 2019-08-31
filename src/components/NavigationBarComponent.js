import React, { Component } from 'react';
import classnames from "classnames"

class NavigationBar extends Component {
    // State holds the vertical position of the website for usage in hiding.
    constructor() {
        super(props);

        this.state = {
            previousOffset: window.pageYOffset,
            visible: true
        }
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
        const visible       = previousOffset > currentOffset;

        this.setState({
            previousOffset: currentOffset,
            visible
        });
    }
    
    // The Navigation Bar disappears when scrolling downwards and viceversa.
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default NavigationBar;