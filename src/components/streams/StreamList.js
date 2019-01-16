import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }
    //helper function to display delete and edit button 
    //if it is the currently signed in users stream
    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }
//map through our streams list and render each one into a list item
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>                   
                </div>
            );
        });
    }
//check to see if the user is signed in, if so the create stream button 
//is viewable/interactable
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>

            )
        }
    }

    render() {
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    //Object.values is a JS function that takes an object as an argument
    //all the different values in that object are pulled out and
    //inserted into an array.
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn 
    };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);