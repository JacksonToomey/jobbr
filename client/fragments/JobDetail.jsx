import React from 'react';
import { connect } from 'react-redux';

import JobInfo from '../containers/JobInfo';
import ContactsList from '../containers/ContactsList';
import JobEvents from '../containers/JobEvents';

import { getCurrentJob } from '../store/state/jobs/selectors';


const Comp = ({
    job
}) => {
    if(!job) {
        return (
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        )
    }
    return (
        <div className="jobbr-job-detail ui mobile reversed stackable grid">
            <div className="ui four wide column">
                <div className="ui segment">
                    <JobInfo />
                    <div className="ui divider"></div>
                    <ContactsList />
                </div>
            </div>
            <div className="ui twelve wide column">
                <div className="ui segment">
                    <JobEvents />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    job: getCurrentJob(state),
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
