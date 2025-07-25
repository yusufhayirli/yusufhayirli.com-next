import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import { portfolioApi } from './api/portfolioApi';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
