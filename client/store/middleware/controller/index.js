import { LOCATION_CHANGED } from 'redux-little-router';
import { fetchJobs } from '../api/actions';


export default store => next => action => {
    let resp = next(action);
    if(action.type == LOCATION_CHANGED) {
        if(action.payload.pathname == '/') {
            store.dispatch(fetchJobs()).end((err, res) => {
                if(err) {

                }
                else {
                    console.log(res.body);
                }
            })
        }
    }
    return resp;
}