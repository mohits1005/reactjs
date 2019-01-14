import React, { Component } from 'react';
export default class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.category_products = [];
    }
    render() {
        let products = this.props.products;
        const rows = [];
        products.forEach(product => {
            if (!this.category_products[product.category])
                this.category_products[product.category] = []
            this.category_products[product.category].push(product);
        });
        // console.log(this.category_products);
        for (var category in this.category_products) {
            // console.log(this.category_products[category]);
            rows.push(
                <tr key={category}>
                    <td colSpan="2">
                        <b>{category}</b>
                    </td>
                </tr>
            );
            this.category_products[category].forEach(product => {
                rows.push(
                    <tr key={product.name}>
                        <td>
                            {product.name}
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
