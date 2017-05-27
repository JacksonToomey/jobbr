import { fetchJobs, fetchJob } from './store/middleware/api/actions';

import { setJobs, addJob } from './store/state/jobs/actions';
import { resetForm } from './store/state/forms/actions';


export default {
    "/": {
        controller: () => dispatch => {
            dispatch(fetchJobs()).end((err, res) => {
                if(err) {
                    dispatch(setJobs([]));
                    dispatch(addErrorMessage('Could not fetch jobs'));
                }
                else {
                    dispatch(setJobs(res.body));
                }
            })
        }
    },
    "/jobs/new": {
        controller: () => dispatch => {
            dispatch(resetForm('job'))
        }
    },
    "/jobs/:jobid": {
        controller: () => (dispatch, getState) => {
            let state = getState();
            let jobId = state.router.params.jobid;
            dispatch(fetchJob(jobId)).end((err, res) => {
                dispatch(addJob(res.body));
            });
        }
    },
    "/resume": {},
}