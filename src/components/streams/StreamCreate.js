import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    //formProps, are form properties passed through redux-form
    //can be destructured to ({input}), that contains necessary
    //props for storing value. i.e. onChange, onBlur, value, etc.
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    render() {
        return(
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
            </form>
        )
    }

}
//reduxForm accepts only one configuration object
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);