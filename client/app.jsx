import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'redux-little-router';
import { Provider } from 'react-redux';
import { initializeCurrentLocation } from 'redux-little-router';


import store from './store';

import Main from './Main';

import './app.scss';


ReactDOM.render(
    <RouterProvider store={ store }>
        <Provider store={ store }>
            <Main />
        </Provider>
    </RouterProvider>,
    document.getElementById('jobbr-main')
)
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}
