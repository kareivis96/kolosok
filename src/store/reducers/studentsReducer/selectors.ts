import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store/index';

const selectStudentSlice = (state: RootState) => state.studentReducer;

export const selectGroups = createSelector(selectStudentSlice, (state) => state.groups);
export const selectStudents = createSelector(selectStudentSlice, (state) => state.students);
