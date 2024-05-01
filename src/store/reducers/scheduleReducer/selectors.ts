import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store/index';

import type { TDaysOfWeek } from 'types/daysOfWeek';

const selectScheduleSlice = (state: RootState) => state.scheduleReducer;

export const selectLessonsByDay = (day: TDaysOfWeek | null) =>
    createSelector(selectScheduleSlice, (state) => {
        return day
            ? state.lessons.filter((lesson) => {
                  return lesson.day === day;
              })
            : [];
    });
