import { Record } from 'immutable';
import * as types from './types';

const NewJob = Record({
    company_name: '',
    position: '',
});

const State = Record({
    job: new NewJob()
});

export default (state = new State(), action) => {
    switch(action.type) {
        case types.UPDATE_FORM:
            let {
                formField,
                value,
                formName,
            } = action.payload;
            return state.withMutations(s => {
                return s.setIn([formName, formField], value);
            })
        default:
            return state;
    }
};
