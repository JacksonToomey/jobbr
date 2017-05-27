import { fromJS } from 'immutable';
import * as types from './types';


export default (state = fromJS({ needsLoading: false }), action) => {
    switch(action.type) {
        case types.SET_JOBS:
            return action.payload
        case types.ADD_JOB:
            let job = action.payload;
            return state.set(job.get('id'), job);
        case types.REMOVE_JOB:
            return state.remove(action.payload);
        default:
            return state;
    }
};
