import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerForBrowser } from 'redux-little-router';

import routes from '../routes';

import jobs from './state/jobs';

import api from './middleware/api';
import controller from './middleware/controller';


const {
    reducer,
    middleware,
    enhancer
} = routerForBrowser({
    routes,
})

const store = createStore(
    combineReducers({
        router: reducer,
        jobs
    }),
    compose(enhancer, applyMiddleware(middleware, api, controller))
);

export default store;
