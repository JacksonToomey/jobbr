import { Map, fromJS } from 'immutable';
import { push } from 'redux-little-router';

import * as api from '../../middleware/api/actions';

import { resetForm } from '../forms/actions';
import { setFormErrors } from '../forms/actions';
import { setModal } from '../modals/actions';

import { getCurrentJob } from './selectors';

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

export const removeJob = jobId => ({
    type: types.REMOVE_JOB,
    payload: jobId
})

export const addEvent = event => ({
    type: types.ADD_EVENT,
    payload: fromJS(event),
})

export const createJob = () => (dispatch, getState) => {
    let {
        forms
    } = getState();
    let newJob = forms.get('job');
    dispatch(api.postJob(newJob)).end((err, res) => {
        if(err) {
            if(res.status == 422) {
                dispatch(setFormErrors('job', res.body.errors));
            }
        }
        else {
            dispatch(addJob(res.body));
            dispatch(resetForm('job'));
            dispatch(push('/jobs/' + res.body.id));
        }
    })
}

export const deleteJob = jobId => dispatch => {
    dispatch(api.deleteJob(jobId)).end((err, res) => {
        dispatch(removeJob(jobId));
    })
}

export const createEvent = () => (dispatch, getState) => {
    let state = getState();
    let {
        forms,
        router,
    } = state;
    let job = getCurrentJob(state);
    let event = forms.get('event');
    dispatch(api.postApplicationEvent(event, job.get('id'))).end((err, res) => {
        if(err) {
            if(res.status == 422) {
                dispatch(setFormErrors('event', res.body.errors));
            }
        }
        else {
            console.log(res.body);
            dispatch(addEvent(res.body));
            dispatch(resetForm('event'));
            dispatch(setModal('addEvent', false));
        }
    })
}
