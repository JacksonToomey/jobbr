import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import Datepicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';

import Error from '../components/Error';

import { makeGetFormData, makeGetFormErrors } from '../store/state/forms/selectors';

import { updateForm, resetForm } from '../store/state/forms/actions';
import { setModal } from '../store/state/modals/actions';
import { createEvent } from '../store/state/jobs/actions';


const Comp = ({
    show,
    setShow,
    setHide,
    event,
    set,
    create,
    errors,
}) => {
    let style = {
        display: 'none'
    };

    if(show) {
        style.display = 'block';
    }
    return (
        <div className="jobbr-job-add-event">
            <button className="ui button" onClick={ setShow }>Add Event</button>
            <div className="ui page active dimmer" style={ style }>
                <div className="ui modal" style={ { ...style, top: '5%' } }>
                    <i className="close icon" onClick={ setHide }></i>
                    <div className="header">
                        Add Event
                    </div>
                    <div className="content">
                        <form className="ui form">
                            <div className="field">
                                <label>Type</label>
                                <input
                                    type="text"
                                    onChange={e => { set('event_type', e.target.value); } }
                                    value={ event.get('event_type') }
                                    placeholder="Type"/>
                                    <Error
                                        errors={ errors }
                                        fieldName="event_type" />
                            </div>
                            <div className="field">
                                <label>Description</label>
                                <input
                                    type="text"
                                    onChange={e => { set('event_description', e.target.value); } }
                                    value={ event.get('event_description') }
                                    placeholder="Description"/>
                                    <Error
                                        errors={ errors }
                                        fieldName="event_description" />
                            </div>
                            <div className="field">
                                <div className="six fields">
                                    <div className="field">
                                        <label>Date</label>
                                        <Datepicker
                                            onChange={dte => {
                                                set('event_time', dte);
                                            }}
                                            selected={ event.get('event_time') }/>
                                    </div>
                                    <div className="field">
                                        <label>Time</label>
                                        <TimePicker
                                            showSecond={ false }
                                            use12Hours
                                            onChange={t => {
                                                set('event_time', t);
                                            }}
                                            value={ event.get('event_time') } />
                                    </div>
                                </div>
                                <Error
                                    errors={ errors }
                                    fieldName="event_time" />
                            </div>
                            <div className="field">
                                <label>Notes</label>
                                <textarea
                                    onChange={e => { set('event_notes', e.target.value); } }
                                    value={ event.get('event_notes') }
                                    rows="2"/>
                                <Error
                                    errors={ errors }
                                    fieldName="event_notes" />
                            </div>
                        </form>
                    </div>
                    <div className="actions">
                        <button className="ui button" onClick={ setHide }>Close</button>
                        <button className="ui button" onClick={ create }>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const getFormData = makeGetFormData('event');
const getFormErrors = makeGetFormErrors('event');


const mapStateToProps = state => ({
    show: state.modals.get('addEvent'),
    event: getFormData(state),
    errors: getFormErrors(state),
})

const mapDispatchToProps = dispatch => ({
    setShow: () => {
        dispatch(setModal('addEvent', true));
    },
    setHide: () => {
        dispatch(setModal('addEvent', false));
        dispatch(resetForm('event'));
    },
    set: (name, value) => {
        dispatch(updateForm(name, value, 'event'));
    },
    create: () => {
        dispatch(createEvent());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
