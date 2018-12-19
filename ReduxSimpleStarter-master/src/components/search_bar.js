import React, {Component} from 'react';
// const Searchbar = () => {
//     return <input />
// };
class Searchbar extends Component{
    render(){
        return <input onChange={this.onInputChange} />;
    }
    onInputChange(event)
    {
        console.log(event.target.value);
    }
}
export default Searchbar;