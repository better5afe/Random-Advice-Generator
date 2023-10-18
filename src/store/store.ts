import { configureStore } from '@reduxjs/toolkit';
import adviceReducer from './adviceSlice';

export const store = configureStore({
	reducer: adviceReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: '',
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
