import { fromJS } from 'immutable';
import * as types from './types';


export default (state = fromJS({ needsLoading: false }), action) => {
    switch(action.type) {
        case types.SET_JOBS:
            return action.payload
        default:
            return state;
    }
};
