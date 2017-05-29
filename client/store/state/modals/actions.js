import * as types from './types';

export const setModal = (modalName, show) => ({
    type: types.SET_MODAL,
    payload: {
        modalName,
        show,
    }
})