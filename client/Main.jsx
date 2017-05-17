import React from 'react';
import { Fragment } from 'redux-little-router';

import Jobs from './fragments/Jobs';

import Navigation from './containers/Navigation';


export default props => (
    <Fragment forRoute="/">
        <div>
            <Navigation />
            <Fragment forRoute="/">
                <Jobs />
            </Fragment>
        </div>
    </Fragment>
)