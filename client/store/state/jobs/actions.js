import { Map, fromJS } from 'immutable';
import { push } from 'redux-little-router';

import { postJob } from '../../middleware/api/actions';

import * as types from './types';


export const setJobs = jobs => {
    jobs = fromJS(jobs);
    let payload = Map(jobs.map(j => [j.get('id'), j]));
    return {
        type: types.SET_JOBS,
        payload
    }
}

export const addJob = job => ({
    type: types.ADD_JOB,
    payload: fromJS(job),
})

export const createJob = () => (dispatch, getState) => {
    let {
        forms
    } = getState();
    let newJob = forms.get('job');
    dispatch(postJob(newJob)).end((err, res) => {
        if(err) {}
        else {
            dispatch(addJob(res.body));
            dispatch(push('/'));
        }
    })
}