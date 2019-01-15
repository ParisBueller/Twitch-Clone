import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
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
    }
};