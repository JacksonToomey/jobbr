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