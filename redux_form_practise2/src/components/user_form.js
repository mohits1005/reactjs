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
class UserForm extends Component{
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div>
                        <Field name="firstName" component={renderField} label="First Name"
                        />
                    </div>
                    <div>
                        <Field name="lastName" component={renderField} label="First Name"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}
export default reduxForm({
    form: 'userForm'
})(UserForm);