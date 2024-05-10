import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store/index';

const selectAttendanceSlice = (state: RootState) => state.attendanceReducer;

export const selectYear = createSelector(selectAttendanceSlice, (state) => state.year);
export const selectMonth = createSelector(selectAttendanceSlice, (state) => state.month);
export const selectDays = createSelector(selectAttendanceSlice, (state) => state.days);
