import React from 'react';
import { connect } from 'react-redux';

import { makeGetFormData } from '../store/state/forms/selectors';

import { updateForm } from '../store/state/forms/actions';

const Comp = ({
    newJob,
    set
}) => {
    return (
        <div className="jobbr-create-job">
            <form className="ui form">
                <div className="field">
                    <label>Company</label>
                    <input
                        value={ newJob.get('company_name') }
                        onChange={e => { set('company_name', e.target.value); } }
                        type="text"
                        placeholder="Company"/>
                </div>
                <div className="field">
                    <label>Position</label>
                    <input
                        value={ newJob.get('position') }
                        onChange={e => { set('position', e.target.value); } }
                        type="text"
                        placeholder="Position"/>
                </div>
            </form>
            <button className="ui button">Add</button>
        </div>
    )
}

const getFormData = makeGetFormData('job');


const mapStateToProps = state => ({
    newJob: getFormData(state),
});

const mapDispatchToProps = dispatch => ({
    set: (name, value) => {
        dispatch(updateForm(name, value, 'job'));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
