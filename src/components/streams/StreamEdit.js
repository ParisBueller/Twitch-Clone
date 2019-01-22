import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = props => {
    console.log(props);
    return <div>StreamEdit</div>;

};

const mapStateToProps = (state, ownProps) => {
    //ownProps.match.params.id contains the id of the stream to be edited
    //identified and stored in redux store when the user clicked edit stream
    return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps)(StreamEdit);