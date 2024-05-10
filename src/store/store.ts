import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/reducers/appReducer';
import { studentReducer } from 'store/reducers/studentsReducer';

import { attendanceReducer } from './reducers/attendanceReducer';
import { scheduleReducer } from './reducers/scheduleReducer';

export const rootReducer = combineReducers({
    appReducer,
    studentReducer,
    scheduleReducer,
    attendanceReducer,
});

export const setupStore = () => {
    return configureStore({ reducer: rootReducer });
};
