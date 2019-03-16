import {
	TRIGGER_SIGNIN,
	TRIGGER_REGISTER,
	TRIGGER_SIGNINFROMREG,
	TRIGGER_REGFROMSIGNIN,
	TRIGGER_OFF
} from '../types';

export const triggerSignIn = () => {
	return {
		type: TRIGGER_SIGNIN
	};
};

export const triggerRegister = () => {
	return {
		type: TRIGGER_REGISTER
	};
};

export const triggerSignInFromReg = () => {
	return {
		type: TRIGGER_SIGNINFROMREG
	};
};

export const triggerRegFromSignIn = () => {
	return {
		type: TRIGGER_REGFROMSIGNIN
	};
};

export const triggerOff = () => {
	return {
		type: TRIGGER_OFF
	};
};
