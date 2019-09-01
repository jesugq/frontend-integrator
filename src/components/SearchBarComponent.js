import React, { Component } from 'react';
import { Carousel } from 'reactstrap';

class SearchBar extends Component {
    // State holds the values of the title.
    constructor(props) {
        super(props);

        this.state = {
            carousel: null
        };
    }

    // Fetch the information required for display.
    componentDidMount() {
        let url = "http://localhost:3001/carousel";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let carousel = data.map((item) => {
                    return(item);
                });
                this.setState({carousel});
            });
    }

    // The Search Bar shows a background image and title supplied by the server.
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SearchBar;