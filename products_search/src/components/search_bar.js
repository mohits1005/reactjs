import React, { Component } from 'react';
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onStockChange = this.onStockChange.bind(this);
    }
    onInputChange(event) {
        this.props.changeFilterText(event.target.value);
    }
    onStockChange(event) {
        const value = event.target.checked;
        this.props.changeStock(value);
    }
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <div className="row">
                <div className="col-sm-6">
                    <form>
                        <h3>Search Bar</h3>
                        <input type="text" className="form-control" name="search" placeholder="Search.." value={filterText} onChange={this.onInputChange}/>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="stockFilter" checked={inStockOnly} onChange={this.onStockChange}/>Only show products in stock
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
