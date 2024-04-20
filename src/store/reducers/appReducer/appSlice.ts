import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './constants';
import type { TAppState } from './types';

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state: TAppState, action: PayloadAction<'light' | 'dark'>) {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = appSlice.actions;
export const themeReducer = appSlice.reducer;
