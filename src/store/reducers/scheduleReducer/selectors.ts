import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store/index';

import type { TDaysOfWeek } from 'types/daysOfWeek';

const selectScheduleSlice = (state: RootState) => state.scheduleReducer;

export const selectScheduleByDay = (day: TDaysOfWeek) =>
    createSelector(selectScheduleSlice, (state) => {
        return state.schedule[day];
    });

export const selectScheduleDays = createSelector(selectScheduleSlice, (state) => {
    return Object.keys(state.schedule) as TDaysOfWeek[];
});
