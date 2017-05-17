import { LOCATION_CHANGED } from 'redux-little-router';
import { fetchJobs } from '../api/actions';

import { setJobs } from '../../state/jobs/actions';


export default store => next => action => {
    let resp = next(action);
    if(action.type == LOCATION_CHANGED) {
        if(action.payload.pathname == '/') {
            store.dispatch(fetchJobs()).end((err, res) => {
                if(err) {

                }
                else {
                    store.dispatch(setJobs(res.body));
                }
            })
        }
    }
    return resp;
}