import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './QualitiesComponent.css'

class Qualities extends Component {
    // State holds the values for the header and three columns.
    constructor(props) {
        super(props);

        this.state = {
            items: {
                "header": "Agenda una llamada al servidor.",
                "first": {
                    "src": "http://placehold.it/100x100&text=You're%20offline!",
                    "alt": "You're offline!",
                    "title": "Llamada",
                    "txt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in gravida lorem."
                },
                "second": {
                    "src": "http://placehold.it/100x100&text=You're%20offline!",
                    "alt": "You're offline!",
                    "title": "Respuesta",
                    "txt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in gravida lorem."
                }
            }
        }
    }

    // Fetch the information required for display.
    componentDidMount() {
        let url = "http://localhost:3001/quality";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let items = data;
                this.setState({items});
            });
    }

    renderColumn(place) {
        const src = place.src;
        const alt = place.alt;
        const title = place.title;
        const txt = place.txt;

        return (
            <div className="col-sm">
                <img className="small-img" src={src} alt={alt}/><br/><br/>
                <h6>{title}</h6>
                <p>{txt}</p>
            </div>
        );
    }

    // The Qualities show three cards showing qualities of our application.
    render() {
        const { items } = this.state;

        return (
            <div>
                <Jumbotron><center>
                    <h1 className="display-4 three-quarters small-display">
                        {items.header}<br/><br/>
                    </h1>
                    <div className="row flexible-quarters">
                        {items.first ?  ( this.renderColumn(items.first))   : (<div></div>) }
                        {items.second ? ( this.renderColumn(items.second))  : (<div></div>) }
                        {items.third ?  ( this.renderColumn(items.third))   : (<div></div>) }
                    </div>
                </center></Jumbotron>
            </div>
        );
    }
}

export default Qualities;