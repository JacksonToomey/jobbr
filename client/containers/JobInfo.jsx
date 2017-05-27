import React from 'react';
import { connect } from 'react-redux';

import { getCurrentJob } from '../store/state/jobs/selectors';


const Comp = ({
    job
}) => {
    return (
        <div className="jobbr-job-info">
            <h2 className="ui header">
                { job.get('company_name') }
                <div className="sub header">{ job.get('position') }</div>
            </h2>
            <div className="ui list">
                <div className="item">
                    <div className="content">
                        <div className="header">Date</div>
                        <div className="description">{ job.get('application_date') }</div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Notes</div>
                        <div className="description">{ job.get('application_notes') }</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    job: getCurrentJob(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
