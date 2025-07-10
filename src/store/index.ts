import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import infoReducer from './infoSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    info: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
