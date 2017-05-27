import React from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-little-router';

import { getJobsLoaded, getJobs } from '../store/state/jobs/selectors';

import { deleteJob } from '../store/state/jobs/actions';


const Comp = ({
    jobsLoaded,
    jobs,
    goToNew,
    goToJob,
    sendDelete,
}) => {
    let body = null;
    if(!jobsLoaded) {
        body = (
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        )
    }
    else if(jobs.size == 0) {
        body = 'You have no jobs.';
    }
    else {
        body = jobs.map((j, key) => {
            return (
                <div className="jobbr-job-card sixteen wide column" key={ key }>
                    <div className="ui segment">
                        <h3>{ j.get('company_name') }</h3>
                        <div>{ j.get('position') }</div>
                        <div>{ j.get('application_date') }</div>
                        <div className="two ui buttons">
                            <button
                                onClick={() => {
                                    goToJob(j.get('id'));
                                }}
                                className="ui basic button">
                                View
                            </button>
                            <button
                                onClick={() => {
                                    sendDelete(j.get('id'));
                                }}
                                className="ui basic button">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <div className="jobbr-jobs ui stackable grid container">
            <div className="sixteen wide column">
                <button onClick={ goToNew } className="ui button">Add</button>
            </div>
            { body }
        </div>
    )
};

const mapStateToProps = state => ({
    jobsLoaded: getJobsLoaded(state),
    jobs: getJobs(state),
})

const mapDispatchToProps = dispatch => ({
    goToNew: () => {
        dispatch(push('/jobs/new'));
    },
    goToJob: jobId => {
        dispatch(push('/jobs/' + jobId))
    },
    sendDelete: jobId => {
        dispatch(deleteJob(jobId));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
