import { Map, fromJS } from 'immutable';
import * as types from './types';


export const setJobs = jobs => {
    jobs = fromJS(jobs);
    let payload = Map(jobs.map(j => [j.get('id'), j]));
    return {
        type: types.SET_JOBS,
        payload
    }
}
