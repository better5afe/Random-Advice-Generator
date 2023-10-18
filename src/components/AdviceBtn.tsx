import { BtnProps } from '../types/types';
import DiceIcon from './assets/icons/DiceIcon';

const AdviceBtn: React.FC<BtnProps> = ({ onClick }) => {
	return (
		<button
			className='absolute -bottom-[28px] flex justify-center items-center h-14 w-14 bg-neonGreen rounded-full outline-none'
			onClick={onClick}
		>
			<DiceIcon />
		</button>
	);
};

export default AdviceBtn;
