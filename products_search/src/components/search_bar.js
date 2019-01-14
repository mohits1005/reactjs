import React, { Component } from 'react';
export default class SearchBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h3>Search Bar</h3>
                    <input type="text" className="form-control" name="search" placeholder="Search.."/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="stockFilter" value="" />Only show products in stock
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
