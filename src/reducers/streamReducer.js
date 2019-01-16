import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
        //as with below, we are creating a new object with current key value pairs,
        //lodash' _.mapKeys method takes the list of streams(action.payload)
        //and creates an object, keys inside this object are going to be the id's of the streams themselves
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        //Any time we receive an action with type, FETCH_STREAM..
        case FETCH_STREAM:
        //we take our state object and all its key value pairs and
        // add add it to the new object, and dynamically add a new key value pair
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
        case DELETE_STREAM:
        //use the lodash method _.omit() to delete a stream
            return _.omit(state, action.payload)
    }
};