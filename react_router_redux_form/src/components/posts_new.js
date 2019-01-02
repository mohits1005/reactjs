import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import PostsForm from './posts_form';
import { createPosts} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
export class PostsNew extends Component{
    handleSubmit = (vars) => {
        let posts = { categories: vars.categories, content: vars.content, title: vars.title };
        this.props.createPosts(posts);
    }
    render() {
        return (
            <div>
                <div>Sample form</div>
                <PostsForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPosts }, dispatch)
}
// Then connect the whole with the redux store
export default connect(null, mapDispatchToProps)(PostsNew);