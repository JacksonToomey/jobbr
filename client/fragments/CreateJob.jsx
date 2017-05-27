import React from 'react';
import { connect } from 'react-redux';
import Datepicker from 'react-datepicker';

import { makeGetFormData, makeGetFormErrors } from '../store/state/forms/selectors';

import { updateForm } from '../store/state/forms/actions';
import { createJob } from '../store/state/jobs/actions';

const Comp = ({
    newJob,
    errors,
    set,
    create,
}) => {
    let formErrors = {
        company_name: null,
        position: null
    }
    if(errors.get('company_name')) {
        formErrors.company_name = (
            <div className="ui error message" style={{display: 'block'}}>
                <ul>
                    {errors.get('company_name').map((e, key) => {
                        return <li key={ key }>{ e }</li>
                    })}
                </ul>
            </div>
        )
    }
    if(errors.get('position')) {
        formErrors.position = (
            <div className="ui error message" style={{display: 'block'}}>
                <ul>
                    {errors.get('position').map((e, key) => {
                        return <li key={ key }>{ e }</li>
                    })}
                </ul>
            </div>
        )
    }
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
                { formErrors.company_name }
                <div className="field">
                    <label>Position</label>
                    <input
                        value={ newJob.get('position') }
                        onChange={e => { set('position', e.target.value); } }
                        type="text"
                        placeholder="Position"/>
                    { formErrors.position }
                </div>
                <div className="field">
                    <label>Date</label>
                    <Datepicker
                        selected={ newJob.get('application_date') }
                        onChange={dte => {
                            set('application_date', dte);
                        }}/>
                </div>
                <div className="field">
                    <label>Notes</label>
                    <textarea
                        value={ newJob.get('application_notes') }
                        onChange={e => { set('application_notes', e.target.value); }}/>
                </div>
            </form>
            <button
                className="ui button"
                onClick={ create }>Add</button>
        </div>
    )
}

const getFormData = makeGetFormData('job');
const getFormErrors = makeGetFormErrors('job');


const mapStateToProps = state => ({
    newJob: getFormData(state),
    errors: getFormErrors(state),
});

const mapDispatchToProps = dispatch => ({
    set: (name, value) => {
        dispatch(updateForm(name, value, 'job'));
    },
    create: () => {
        dispatch(createJob());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
