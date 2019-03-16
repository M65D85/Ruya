import {
	TRIGGER_SIGNIN,
	TRIGGER_REGISTER,
	TRIGGER_SIGNINFROMREG,
	TRIGGER_REGFROMSIGNIN,
	IS_LOGGED_IN,
	TRIGGER_OFF,
	AUTHENTICATED_NAME
} from '../../Actions/types';

const INITIAL_STATE = {
	isLoggedIn: false,
	triggerSignIn: false,
	triggerRegister: false,
	triggerSignInFromRegister: false,
	triggerRegisterFromSignIn: false,
	authenticatedName: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRIGGER_SIGNIN:
			return {
				...state,
				triggerSignIn: true,
				triggerRegister: false,
				triggerSignInFromRegister: false,
				triggerRegisterFromSignIn: false
			};
		case TRIGGER_REGISTER:
			return {
				...state,
				triggerSignIn: false,
				triggerRegister: true,
				triggerSignInFromRegister: false,
				triggerRegisterFromSignIn: false
			};
		case TRIGGER_SIGNINFROMREG:
			return {
				...state,
				triggerSignIn: false,
				triggerRegister: false,
				triggerSignInFromRegister: true,
				triggerRegisterFromSignIn: false
			};
		case TRIGGER_REGFROMSIGNIN:
			return {
				...state,
				triggerSignIn: false,
				triggerRegister: false,
				triggerSignInFromRegister: false,
				triggerRegisterFromSignIn: true
			};
		case TRIGGER_OFF:
			return {
				...state,
				triggerSignIn: false,
				triggerRegister: false,
				triggerSignInFromRegister: false,
				triggerRegisterFromSignIn: false
			};
		case AUTHENTICATED_NAME:
			return {
				...state,
				authenticatedName: action.payload
			};
		case IS_LOGGED_IN:
			return { ...state, isLoggedIn: !state.isLoggedIn };
		default:
			return state;
	}
};
