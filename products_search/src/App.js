import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import ProductTable from './components/product_table';
import 'bootstrap/dist/css/bootstrap.css';
const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.changeFilterText = this.changeFilterText.bind(this);
    this.changeStock = this.changeStock.bind(this);
  }
  changeFilterText(value){
      this.setState({filterText:value});
  }
  changeStock(value) {
    this.setState({ inStockOnly: value });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Shopping List</h1>
          </div>
        </div>
        <SearchBar filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          changeFilterText={this.changeFilterText}
          changeStock={this.changeStock}/>
        <ProductTable products={PRODUCTS} filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

export default App;
