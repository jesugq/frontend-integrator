import React, { Component } from 'react';
import Search from '@material-ui/icons/Search';
import './SearchBarComponent.css';

class SearchBar extends Component {
    // State holds the values of the search bar query
    constructor(props){
        super(props);
        this.state = { value: '' };

        this.updateSearch = this.updateSearch.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }

    // Updates the state to match the item to search for
    updateSearch(event) {
        this.setState({value: event.target.value})
    }

    // Makes the call to backend
    submitSearch(event) {
        alert("Search sent");
    }

    // Search Bar allows for searching a new system.
    render() {
        return(
            <div className="search-bar">
                <form onSubmit={this.submitSearch}>
                    <div class="table">
                        <div class="table-cell">
                            <input
                                type="text"
                                placeholder="Búsqueda de materias..."
                                value={this.state.value}
                                onChange={this.updateSearch}
                                required
                            />
                        </div>
                        <div class="table-cell">
                            <button type="submit" >
                                <Search fontSize="large"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;