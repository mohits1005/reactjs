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
                        return this.onInputChange(event.target.value)
                    }
                }/>
            </div>
        );
    }
    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default Searchbar;