import React from 'react';
import { connect } from 'react-redux';

import AddEvent from './AddEvent';

import { getCurrentEvents } from '../store/state/jobs/selectors';


const Comp = ({
    events,
}) => {
    let body = null;
    if(events.size == 0) {
        body = <div>No events.</div>;
    }
    else {

    }
    return (
        <div className="jobbr-job-events">
            <AddEvent />
            { body }
        </div>
    )
};

const mapStateToProps = state => ({
    events: getCurrentEvents(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
