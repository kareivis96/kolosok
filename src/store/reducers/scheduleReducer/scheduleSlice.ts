import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TLesson } from 'types/schedule';

import { initialState } from './constants';
import type { TScheduleState } from './types';

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        setLessons(state: TScheduleState, action: PayloadAction<TLesson[]>) {
            state.lessons = action.payload;
        },
        addLesson(state: TScheduleState, action: PayloadAction<TLesson>) {
            state.lessons = [...state.lessons, action.payload];
        },
        removeLesson(state: TScheduleState, action: PayloadAction<TLesson>) {
            state.lessons = state.lessons.filter((lesson) => lesson.id !== action.payload.id);
        },
    },
});

export const { setLessons, addLesson, removeLesson } = scheduleSlice.actions;
export const scheduleReducer = scheduleSlice.reducer;
