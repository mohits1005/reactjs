import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
    }
    return errors
}
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
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div>
                        <Field name="firstName" component={renderField} label="First Name"
                        />
                    </div>
                    <div>
                        <Field name="lastName" component={renderField} label="Last Name"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={pristine || submitting}  >Submit</button>
                </div>
            </form>
        );
    }
}
export default reduxForm({
    form: 'userForm',
    validate,
})(UserForm);