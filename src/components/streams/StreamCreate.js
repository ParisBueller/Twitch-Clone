import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    //formProps, are form properties passed through redux-form
    //can be destructured to ({input}), that contains necessary
    //props for storing value. i.e. onChange, onBlur, value, etc.
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }
    //called with form values and not event as you would without redux form
    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return(
            //handleSubmit is a callback function provided by redux form
            //call that function with our defined callback method(this.onSubmit)
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }

}
//validate function validates our form by connecting to redux for below
const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

//reduxForm accepts only one configuration object
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);