import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
class PostsNew extends Component{
    render(){
        // const handleSubmit = this.props.handleSubmit;
        const {fields: {title, categories, content}, handleSubmit} = this.props;
        console.log(this.props.fields[0]);
        return(
            <form onSubmit={handleSubmit}>
                <h3>Create a new Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content']
})(PostsNew);

//user types something in record it on application state
/*
state === {
    form: {
        PostsNewForm: {
            title: '...',
            category: '...',
            content: '...'
        }
    }
}
*/