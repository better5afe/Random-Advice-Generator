export interface IconProps {
	className: string;
}

export interface BtnProps {
	onClick: () => void;
}

export interface ActionObject {
	type: string;
	payload?: any;
}

export interface StateObject {
	isLoading: boolean,
	isError: boolean;
	errorMsg: string;
	advice: string;
	adviceNumber: number | null;
}
