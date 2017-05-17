import React from 'react';
import { connect } from 'react-redux';

import { getJobsLoaded, getJobsMap } from '../store/state/jobs/selectors';


const Comp = ({
    jobsLoaded,
    jobs
}) => {
    let body = null;
    if(!jobsLoaded) {
        body = 'Loading...'
    }

    if(jobs.size == 0) {
        body = 'You have no jobs.'
    }

    return (
        <div className="jobbr-jobs">
            { body }
        </div>
    )
};

const mapStateToProps = state => ({
    jobsLoaded: getJobsLoaded(state),
    jobs: getJobsMap(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
