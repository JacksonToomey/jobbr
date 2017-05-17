import React from 'react';
import { connect } from 'react-redux';


const Comp = props => {
    return (
        <div className="jobbr-navigation">
            <h1>Jobbr</h1>
            <ul>
                <li>Jobs</li>
                <li>Resume</li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
