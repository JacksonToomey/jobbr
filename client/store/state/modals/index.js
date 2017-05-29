import { Record } from 'immutable';
import * as types from './types';


const State = Record({
    addEvent: false,
})

export default (state = new State(), action) => {
    switch(action.type) {
        case types.SET_MODAL:
            return state.set(action.payload.modalName, action.payload.show);
        default:
            return state;
    }
}