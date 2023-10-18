import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateObject } from '../types/types';
import { ThunkDispatch } from '@reduxjs/toolkit';

const initialState: StateObject = {
	isLoading: false,
	isError: false,
	errorMsg: '',
	advice: '',
	adviceNumber: null,
};

const adviceSlice = createSlice({
	name: 'advice',
	initialState,
	reducers: {
		generateAdvice: (state, action: PayloadAction<StateObject>) => {
			return { ...state, ...action.payload };
		},
	},
});

export const getAdvice = () => {
	return async (dispatch: ThunkDispatch<StateObject, unknown, AnyAction>) => {
		dispatch(
			generateAdvice({
				isLoading: true,
				isError: false,
				errorMsg: '',
				advice: '',
				adviceNumber: null,
			})
		);

		try {
			const res = await fetch('https://api.adviceslip.com/advice');

			if (!res.ok) {
				dispatch(
					generateAdvice({
						isLoading: false,
						isError: true,
						errorMsg: 'Something went wrong. Please try again later.',
						advice: '',
						adviceNumber: null,
					})
				);
				return;
			}

			const data = await res.json();

			dispatch(
				generateAdvice({
					isLoading: false,
					isError: false,
					errorMsg: '',
					advice: data.slip.advice,
					adviceNumber: data.slip.id,
				})
			);
		} catch (error) {
			dispatch(
				generateAdvice({
					isLoading: false,
					isError: true,
					errorMsg: 'Something went wrong. Please try again later.',
					advice: '',
					adviceNumber: null,
				})
			);
		}
	};
};

export const { generateAdvice } = adviceSlice.actions;
export default adviceSlice.reducer;
