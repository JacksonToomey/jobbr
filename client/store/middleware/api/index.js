import requests from 'superagent';
import makeMock from 'superagent-mocker';
import * as types from './types';

// const mock = makeMock(requests);
// mock.timeout = 200;
// mock.get('/api/jobs/', function(req) {
//     return {
//         id: req.params.id,
//         body: [
//             {
//                 id: 1,
//                 company_name: 'Facebook',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 2,
//                 company_name: 'Google',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 3,
//                 company_name: 'Amazon',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 4,
//                 company_name: 'Amazon1',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 5,
//                 company_name: 'Amazon2',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 6,
//                 company_name: 'Amazon3',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 3,
//                 company_name: 'Amazon',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 7,
//                 company_name: 'Amazon4',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 8,
//                 company_name: 'Amazon5',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 9,
//                 company_name: 'Amazon6',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//             {
//                 id: 10,
//                 company_name: 'Amazon7',
//                 position: 'Software Engineer',
//                 application_date: '2017-02-01',
//             },
//         ],
//         headers: req.headers
//     };
// });


export default store => next => action => {
    switch(action.type) {
        case types.FETCH_JOBS:
            return requests.get('/api/jobs/')
        case types.POST_JOB:
            return requests.post('/api/jobs/')
                .send(action.payload)
                .set('Accept', 'application/json')
        case types.FETCH_JOB:
            let jobId = action.payload;
            return requests.get('/api/jobs/' + jobId + '/')
        case types.DELETE_JOB:
            return requests.delete('/api/jobs/' + action.payload + '/');
        default:
            return next(action);
    }
}