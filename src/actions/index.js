import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
//this post request using  restful conventions will create a stream 
export const createStream = formValues => async dispatch => {
    streams.post('/streams', formValues);
};
