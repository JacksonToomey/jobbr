import { Record, fromJS } from 'immutable';
import moment from 'moment-timezone';
import * as types from './types';

const NewJob = Record({
    company_name: '',
    position: '',
    application_date: moment(),
    application_notes: '',
});

const State = Record({
    job: new NewJob(),
    errors: fromJS({
        job: {},
    })
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
            });
        case types.RESET_FORM:
            return state.withMutations(s => {
                s.remove(action.payload);
                s.setIn(['errors', action.payload], fromJS([]));
            })
        case types.SET_FORM_ERRORS:
            return state.setIn(['errors', action.payload.formName], action.payload.errors)
        default:
            return state;
    }
};
