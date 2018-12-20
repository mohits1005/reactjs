import React, {Component} from 'react';
// const Searchbar = () => {
//     return <input />
// };
class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {term:''};
    }
    render(){
        return(
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={(event) => {
                        return this.setState({term: event.target.value})
                    }
                }/>
            </div>
        );
    }
    onInputChange(event)
    {
        // console.log(event.target.value);
        this.setState({term: event.target.value});
    }
}
export default Searchbar;