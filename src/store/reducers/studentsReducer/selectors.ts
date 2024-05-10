import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store/index';

const selectStudentSlice = (state: RootState) => state.studentReducer;

export const selectGroups = createSelector(selectStudentSlice, (state) => state.groups);
export const selectStudents = createSelector(selectStudentSlice, (state) => state.students);

export const selectStudentById = (id: string | null) =>
    createSelector(selectStudentSlice, (state) => {
        if (!id) {
            return null;
        }
        return state.students.find((student) => student.id === id);
    });
