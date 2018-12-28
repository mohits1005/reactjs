import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
export class PostsIndex extends Component{
    componentWillMount(){
        console.log('here');
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                Lists of blog posts
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch)
}
export default connect(null, mapDispatchToProps)(PostsIndex);