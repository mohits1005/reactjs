import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPosts } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
class PostsForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field name="title" component={renderField} label="Enter Title"
                    />
                </div>
                <div className="form-group">
                    <Field name="categories" component={renderField} label="Enter Categories"
                    />
                </div>
                <div className="form-group">
                    <Field name="content" component={renderField} label="Enter Content"
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting}  >Submit</button>
            </form>
        );
    }
}
//connect: first argument in mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st if form config, 2nd is mapStateToProps, 3rd is maoDispatchToProps
export default reduxForm({
    form: 'postsForm'
})(PostsForm);
