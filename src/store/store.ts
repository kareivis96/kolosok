import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/reducers/appReducer';
import { studentReducer } from 'store/reducers/studentsReducer';

import { scheduleReducer } from './reducers/scheduleReducer';

export const rootReducer = combineReducers({
    appReducer,
    studentReducer,
    scheduleReducer,
});

export const setupStore = () => {
    return configureStore({ reducer: rootReducer });
};
