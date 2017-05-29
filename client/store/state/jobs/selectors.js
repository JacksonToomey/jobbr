import { createSelector } from 'reselect';
import { List } from 'immutable';


export const getJobsNeedsLoading = ({ jobs }) => jobs.get('needsLoading');
export const getJobsMap = ({ jobs }) => jobs;

export const getJobsLoaded = createSelector(
    [getJobsNeedsLoading],
    needsLoading => typeof needsLoading === 'undefined'
);

export const getJobs = createSelector(
    [getJobsLoaded, getJobsMap],
    (jobsLoaded, jobsMap) => {
        if(!jobsLoaded) {
            return new List()
        }

        let jobs = jobsMap.toList();
        return jobs
    }
)

export const getCurrentJob = createSelector(
    [
        ({ router }) => router.params,
        getJobsMap
    ],
    (params, jobsMap) => {
        if(params && params.jobid) {
            return jobsMap.get(parseInt(params.jobid));
        }

        return null;
    }
)

export const getCurrentEvents = createSelector(
    [getCurrentJob],
    job => job.get('events').sortBy(e => e.get('event_time'), (a, b) => {
        if(a == b) {
            return 0;
        }

        if(a < b) {
            return 1;
        }

        return -1;
    }),
)