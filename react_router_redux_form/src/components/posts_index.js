import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';
export class PostsIndex extends Component{
    componentWillMount(){
        console.log('here');
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>Lists of blog posts</div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch)
}
export default connect(null, mapDispatchToProps)(PostsIndex);