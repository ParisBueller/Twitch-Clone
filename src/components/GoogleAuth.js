import React from 'react';

class GoogleAuth extends React.Component {
    //Initialize the google oAuth library
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '462656433597-c7fpcthsoodqqg4rtuuftn49lao96dgl.apps.googleusercontent.com',
                scope: 'email' 
            });
        });
    }

    render() {
        return <div>Google Auth</div>
    };
};

export default GoogleAuth;