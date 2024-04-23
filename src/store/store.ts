import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { themeReducer } from 'store/reducers/appReducer';

import { scheduleReducer } from './reducers/scheduleReducer';

export const rootReducer = combineReducers({
    themeReducer,
    scheduleReducer,
});

export const setupStore = () => {
    return configureStore({ reducer: rootReducer });
};
