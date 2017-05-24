import { fromJS } from 'immutable';
import * as types from './types';

let initialState = [
]


export default (state = fromJS(initialState), action) => {
    switch(action.type) {
        case types.ADD_MESSAGE:
            return state.withMutations(s => s.unshift(fromJS(action.payload)));
        case types.REMOVE_MESSAGE:
            return state.withMutations(s => s.delete(action.payload))
        default:
            return state;
    }
};
