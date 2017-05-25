import * as types from './types';

export const fetchJobs = () => ({
    type: types.FETCH_JOBS
});

export const postJob = job => ({
    type: types.POST_JOB,
    payload: job,
});