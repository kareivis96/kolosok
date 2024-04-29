import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/reducers/appReducer';
import { studentReducer } from 'store/reducers/studentsReducer';

export const rootReducer = combineReducers({
    appReducer,
    studentReducer,
});

export const setupStore = () => {
    return configureStore({ reducer: rootReducer });
};
