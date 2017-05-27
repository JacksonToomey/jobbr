import React from 'react';
import { connect } from 'react-redux';


const Comp = props => {
    return (
        <div className="jobbr-job-contacts-list">
            Contacts list
        </div>
    )
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
