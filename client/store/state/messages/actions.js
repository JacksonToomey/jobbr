import * as types from './types';

export const addErrorMessage = (content) => ({
    type: types.ADD_MESSAGE,
    payload: {
        content,
        type: 'error'
    }
});

export const addInfoMessage = (content) => ({
    type: types.ADD_MESSAGE,
    payload: {
        content,
        type: 'info'
    }
});

export const addWarningMessage = (content) => ({
    type: types.ADD_MESSAGE,
    payload: {
        content,
        type: 'warning'
    }
});

export const removeMessage = index => ({
    type: types.REMOVE_MESSAGE,
    payload: index
})