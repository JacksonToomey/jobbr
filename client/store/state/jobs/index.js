import { fromJS } from 'immutable';


export default (state = fromJS({ needsLoading: false }), action) => {
    switch(action.type) {
        default:
            return state;
    }
};
