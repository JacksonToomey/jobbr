import { createSelector } from 'reselect';


export const getJobsNeedsLoading = ({ jobs }) => jobs.get('needsLoading');

export const getJobsLoaded = createSelector(
    [getJobsNeedsLoading],
    needsLoading => typeof needsLoading === 'undefined'
)