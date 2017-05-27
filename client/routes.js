import { fetchJobs, fetchJob } from './store/middleware/api/actions';

import { setJobs, addJob } from './store/state/jobs/actions';


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
    "/new": {},
    "/jobs/:jobid": {
        controller: () => (dispatch, getState) => {
            let state = getState();
            let jobId = state.router.params.jobid;
            dispatch(fetchJob(jobId)).end((err, res) => {
                dispatch(addJob(res.body));
            })
        }
    },
}