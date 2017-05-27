import React from 'react';
import { Fragment } from 'redux-little-router';

import Jobs from './fragments/Jobs';
import CreateJob from './fragments/CreateJob';
import JobDetail from './fragments/JobDetail';
import Resume from './fragments/Resume';

import Navigation from './containers/Navigation';
import Messages from './containers/Messages';


export default props => (
    <Fragment forRoute="/">
        <div>
            <Navigation />
            <div className="ui container" style={ { marginTop: '80px' } }>
                <Fragment forRoute="/">
                    <Jobs />
                </Fragment>
                <Fragment forRoute="/jobs/new">
                    <CreateJob />
                </Fragment>
                <Fragment forRoute="/jobs/:jobid">
                    <JobDetail />
                </Fragment>
                <Fragment forRoute="/resume">
                    <Resume />
                </Fragment>
            </div>
            <Messages />
        </div>
    </Fragment>
)