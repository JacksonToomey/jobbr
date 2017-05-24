export const makeGetFormData = formName => {
    return ({ forms }) => forms.get(formName);
}