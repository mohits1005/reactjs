import React, { Component } from 'react';
export default class ProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let products = this.props.products;
        let filterText = this.props.filterText;
        let inStockOnly = this.props.inStockOnly;
        let category_products = [];
        let rows = [];
        products.forEach(product => {
            if (!category_products[product.category])
                category_products[product.category] = []
            category_products[product.category].push(product);
        });
        for (var category in category_products) {
            rows.push(
                <tr key={category}>
                    <td colSpan="2">
                        <b>{category}</b>
                    </td>
                </tr>
            );
            category_products[category].forEach(product => {
                const name = product.stocked ?
                    product.name :
                    <span style={{ color: 'red' }}>
                        {product.name}
                    </span>;
                if (product.name.indexOf(filterText) === -1) {
                    return;
                } 
                if (inStockOnly && !product.stocked) {
                    return;
                }
                rows.push(
                    <tr key={product.name}>
                        <td>
                            {name}
                        </td>
                        <td>
                            {product.price}
                        </td>
                    </tr>
                );
            });
        }
        return (
            <div className="row">
                <div className="col-sm-6">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows} 
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
