import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'redux-little-router';

import store from './store';

import Main from './Main';

import './app.scss';


ReactDOM.render(
    <RouterProvider store={ store }>
        <Main />
    </RouterProvider>,
    document.getElementById('jobbr-main')
)
