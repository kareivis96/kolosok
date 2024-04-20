import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appSlice } from 'store/reducers/appReducer';

export const rootReducer = combineReducers({
    appSlice,
});

export const setupStore = () => {
    return configureStore({ reducer: rootReducer });
};
