import { fromJS } from 'immutable';
import * as types from './types'

export const resetForm = formName => ({
    type: types.RESET_FORM,
    payload: formName,
});

export const setFormErrors = (formName, errors) => ({
    type: types.SET_FORM_ERRORS,
    payload: {
        formName,
        errors: fromJS(errors),
    }
})

export const updateForm = (formField, value, formName) => ({
    type: types.UPDATE_FORM,
    payload : {
        formField,
        value,
        formName
    }
})