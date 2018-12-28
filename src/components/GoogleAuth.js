import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    //Initialize the google oAuth library
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            //.init returns a promise that notifies us when the client
            //library is successfully initialized
            window.gapi.client.init({
                clientId: '462656433597-c7fpcthsoodqqg4rtuuftn49lao96dgl.apps.googleusercontent.com',
                scope: 'email' 
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //check if the user is signed in or not and set it to our state
                this.onAuthChange(this.auth.isSignedIn.get())
                //call the gapi .listen method to listen if a user is
                //signed in or out and update renderAuthButton accordingly
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return(
                <button onClick={this.onSignOutClick} className="ui red google button">
                   <i className="google icon" />
                   Sign Out 
                </button>
                )
        } else {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    };
};

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps,{ signIn, signOut })(GoogleAuth);