import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
class UserForm extends Component{
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div>
                        <label className="control-label">First Name</label>
                        <Field name="firstName"
                            component={firstName =>
                                <input type="text" className="form-control" {...firstName.input} placeholder="First Name" />
                            }
                        />
                    </div>
                    <div>
                        <label className="control-label">Last Name</label>
                        <Field name="lastName"
                            component={lastName =>
                                <input type="text" className="form-control" {...lastName.input} placeholder="Last Name" />
                            }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}
export default reduxForm({
    form: 'userForm',
    fields: ['firstName', 'lastName']
})(UserForm);