import requests from 'superagent';
import * as types from './types';


export default store => next => action => {
    switch(action.type) {
        case types.FETCH_JOBS:
            return requests.get('/api/jobs/')
        default:
            return next(action);
    }
}