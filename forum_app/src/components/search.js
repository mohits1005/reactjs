import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({ value: event.target.value});
    }
    onSearchSubmit(event) {
        event.preventDefault();
        this.props.changeFilterText(this.state.value);
    }
    render() {
        const filterText = this.state.value;
        return (
            <div className="row search-container">
                <div className="col-xs-12 col-sm-10 col-md-8 center-container">
                    <form onSubmit={this.onSearchSubmit}>
                        <div className="col-sm-10 input-container">
                            <input type="text" className="search form-control" placeholder="Search" value={filterText} onChange={this.onInputChange} />
                            <button className="search-btn" type="submit">
                                SEARCH
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Search;
