import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/typed-hooks';
import { getAdvice } from '../store/adviceSlice';
import { StateObject } from '../types/types';
import Loader from './assets/icons/Loader';
import DividerMobile from './assets/icons/DividerMobile';
import DividerDesktop from './assets/icons/DivierDesktop';
import AdviceBtn from './AdviceBtn';
const Advice = () => {
	const advice = useAppSelector((state: StateObject) => state);

	const dispatch = useAppDispatch();

	const generateAdviceHandler = () => {
		dispatch(getAdvice());
	};

	useEffect(() => {
		dispatch(getAdvice());
	}, []);

	return (
		<div className='advice relative flex flex-col items-center w-[300px] p-8 bg-darkGrayishBlue rounded-lg text-center sm:w-[350px] md:w-[700px]'>
			{advice.isLoading && <Loader className='loader' />}
			{!advice.isLoading && (
				<>
					<h1 className='mb-7 text-neonGreen uppercase tracking-[5px] text-xs lg:text-md'>
						{advice.isError ? 'Error!' : `Advice #${advice.adviceNumber}`}
					</h1>
					<p className='text-2xl text-lightCyan'>
						{advice.isError
							? advice.errorMsg
							: `"${advice.advice.normalize()}"`}
					</p>
				</>
			)}
			<DividerMobile className='my-8 md:hidden' />
			<DividerDesktop className='hidden md:block md:my-8' />
			<AdviceBtn onClick={generateAdviceHandler} />
		</div>
	);
};

export default Advice;
