import * as types from './types'

export const resetForm = formName => ({
    type: types.RESET_FORM,
    payload: formName,
});

export const updateForm = (formField, value, formName) => ({
    type: types.UPDATE_FORM,
    payload : {
        formField,
        value,
        formName
    }
})