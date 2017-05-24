import React from 'react';
import { connect } from 'react-redux';

import { getMessages } from '../store/state/messages/selectors';

import { removeMessage } from '../store/state/messages/actions';

const Comp = ({
    messages,
    remove,
}) => {
    return (
        <div className="jobbr-messages">
            {messages.map((message, key) => {
                return (
                    <div
                        className="jobbr-message ui message"
                        key={ key }
                        onClick={() => { remove(key); }}>
                        { message.get('content') }
                    </div>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => ({
    messages: getMessages(state)
})

const mapDispatchToProps = dispatch => ({
    remove: index => {
        dispatch(removeMessage(index));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp)
