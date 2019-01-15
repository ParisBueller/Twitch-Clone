import streams from '../apis/streams';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';

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
    const response = await streams.post('/streams', formValues);
    //dispatch a create stream action with the payload of the data from the response
    dispatch({ type: CREATE_STREAM, payload: response.data });
};

//this get request using restful conventions will fetch a list of streams
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

//get request to fetch a single particular stream, not a list like above
export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
};

//put request to edit a stream, passing both id of stream to be edited and formValues
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
};

//delete request to delete a stream, again passing the id of the stream to be deleted
export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    //unlike the other action creators being dispatched, our payload
    //will be the id of the stream we are deleting
    dispatch({ type: DELETE_STREAM, payload: id });
};

