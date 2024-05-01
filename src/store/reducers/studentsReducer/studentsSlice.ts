import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TGroup } from 'types/group';
import type { TStudent } from 'types/student';

import { initialState } from './constants';
import type { TStudentsState } from './types';

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudets(state: TStudentsState, action: PayloadAction<TStudent[]>) {
            state.students = action.payload;
        },
        setGroups(state: TStudentsState, action: PayloadAction<TGroup[]>) {
            state.groups = action.payload;
        },
    },
});

export const { setStudets, setGroups } = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
