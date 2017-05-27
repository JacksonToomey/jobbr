import React from 'react';
import { connect } from 'react-redux';

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
        <div className="jobbr-job-detail">
            { job.get('company_name') } - { job.get('position') }
        </div>
    )
}

const mapStateToProps = state => ({
    job: getCurrentJob(state),
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
