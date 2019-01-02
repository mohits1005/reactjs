import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import PostsForm from './posts_form';
export default class PostsNew extends Component{
    handleSubmit = (vars) => {
        console.log(vars);
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