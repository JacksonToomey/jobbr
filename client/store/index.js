import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerForBrowser } from 'redux-little-router';

import routes from '../routes';


const {
    reducer,
    middleware,
    enhancer
} = routerForBrowser({
    routes,
})

const store = createStore(
    combineReducers({ router: reducer }),
    compose(enhancer, applyMiddleware(middleware))
);

export default store;
