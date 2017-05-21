import React from 'react';
import { connect } from 'react-redux';


const Comp = props => {
    return (
        <div className="ui top fixed menu jobbr-navigation">
            <div className="item">Jobbr</div>
            <a className="item">Jobs</a>
            <a className="item">Resume</a>
        </div>
    )
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
