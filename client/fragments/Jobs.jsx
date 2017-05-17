import React from 'react';
import { connect } from 'react-redux';

import { getJobsLoaded } from '../store/state/jobs/selectors';


const Comp = ({
    jobsLoaded
}) => {
    if(!jobsLoaded) {
        return (
            <div className="jobbr-jobs">
                Loading...
            </div>
        )
    }
    return (
        <div className="jobbr-jobs">
            Jobs
        </div>
    )
};

const mapStateToProps = state => ({
    jobsLoaded: getJobsLoaded(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
