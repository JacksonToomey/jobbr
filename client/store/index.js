import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import ReduxThunk from 'redux-thunk'

import routes from '../routes';

import jobs from './state/jobs';
import messages from './state/messages';
import forms from './state/forms';
import modals from './state/modals';

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
        jobs,
        messages,
        forms,
        modals,
    }),
    compose(enhancer, applyMiddleware(middleware, api, controller, ReduxThunk))
);

export default store;
