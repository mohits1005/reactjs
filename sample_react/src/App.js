import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    render() {

        const name = 'Josh Perez';
        const element = <h1>Hello, {name}</h1>;

        
        return ( 
            <div className = "App" >
                <header >
                    Heisenberg 
                </header> 
                <p>
                    This is a sample application. 
                </p> 
                <div id = "root" >
                </div> 
            </div>
        );
    }
    
}

export default App;