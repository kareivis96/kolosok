import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TMonthAttendance } from 'types/attendance';

import { initialState } from './constants';
import type { TAttendanceState } from './types';

export const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        setYear(state: TAttendanceState, action: PayloadAction<string>) {
            state.year = action.payload;
        },
        setMonth(state: TAttendanceState, action: PayloadAction<string>) {
            state.month = action.payload;
        },
        setDays(state: TAttendanceState, action: PayloadAction<TMonthAttendance | null>) {
            state.days = action.payload;
        },
        toggleDayAttendance(state: TAttendanceState, action: PayloadAction<string>) {
            const isCurrentDayAttendance = !!state.days && !!state.days[action.payload];
            state.days = { ...state.days, [action.payload]: !isCurrentDayAttendance };
        },
    },
});

export const { setYear, setMonth, setDays, toggleDayAttendance } = attendanceSlice.actions;
export const attendanceReducer = attendanceSlice.reducer;
