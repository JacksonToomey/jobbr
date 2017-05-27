import * as types from './types';

export const fetchJobs = () => ({
    type: types.FETCH_JOBS
});

export const fetchJob = jobId => ({
    type: types.FETCH_JOB,
    payload: jobId,
})

export const postJob = job => ({
    type: types.POST_JOB,
    payload: job,
});

export const deleteJob = jobId => ({
    type: types.DELETE_JOB,
    payload: jobId,
})