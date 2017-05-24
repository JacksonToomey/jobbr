import { LOCATION_CHANGED } from 'redux-little-router';
import { fetchJobs } from '../api/actions';

import { setJobs } from '../../state/jobs/actions';

import { addErrorMessage } from '../../state/messages/actions';


export default store => next => action => {
    let resp = next(action);
    if(action.type == LOCATION_CHANGED) {
        if(action.payload.pathname == '/') {
            store.dispatch(fetchJobs()).end((err, res) => {
                if(err) {
                    store.dispatch(setJobs([]));
                    store.dispatch(addErrorMessage('Could not fetch jobs'));
                }
                else {
                    store.dispatch(setJobs(res.body));
                }
            })
        }
    }
    return resp;
}