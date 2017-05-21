import React from 'react';
import { Fragment } from 'redux-little-router';

import Jobs from './fragments/Jobs';

import Navigation from './containers/Navigation';


export default props => (
    <Fragment forRoute="/">
        <div>
            <Navigation />
            <div className="ui container" style={ { marginTop: '80px' } }>
            <Fragment forRoute="/">
                <Jobs />
            </Fragment>
            </div>
        </div>
    </Fragment>
)