import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';


const Comp = props => {
    return (
        <div className="ui top fixed menu jobbr-navigation">
            <div className="item"><img style={{width: '60px'}} src="/static/images/jobbr.png"/></div>
            <Link className="item" href="/">Jobs</Link>
            <Link className="item" href="/resume">Resume</Link>
        </div>
    )
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
