import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter';
export const store = configureStore({
    reducer: {
        filter,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
