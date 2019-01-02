import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
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
export default reduxForm({
    form: 'postsForm'
})(PostsForm);