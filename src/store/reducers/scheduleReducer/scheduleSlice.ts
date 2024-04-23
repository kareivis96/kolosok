import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TSchedule } from 'types/schedule';

import { initialState } from './constants';
import type { TScheduleState } from './types';

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        setSchedule(state: TScheduleState, action: PayloadAction<TSchedule>) {
            state.schedule = action.payload;
        },
    },
});

export const { setSchedule } = scheduleSlice.actions;
export const scheduleReducer = scheduleSlice.reducer;
