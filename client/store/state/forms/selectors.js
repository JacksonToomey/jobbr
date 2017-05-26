export const makeGetFormData = formName => {
    return ({ forms }) => forms.get(formName);
}

export const makeGetFormErrors = formName => {
    return ({ forms }) => forms.getIn(['errors', formName]);
}