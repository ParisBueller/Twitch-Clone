import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        console.log(formValues);
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            //StreamForm passed initial values, specific to redux form
            //to set initial form values
            <div>
                <h3>Edit a Stream</h3>
                
                <StreamForm 
                    initialValues={this.props.stream}
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    //ownProps.match.params.id contains the id of the stream to be edited
    //identified and stored in redux store when the user clicked edit stream
    return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);