import {
	REG_EMAIL_CHANGED,
	REG_PASSWORD_CHANGED,
	LOGIN_EMAIL_CHANGED,
	LOGIN_PASSWORD_CHANGED,
	FIRSTNAME_CHANGED,
	LASTNAME_CHANGED,
	REGISTER_FORM,
	LOGIN_FORM,
	SIGN_OUT
} from '../../Actions/types';

const INITIAL_STATE = {
	firstName: '',
	lastName: '',
	loginEmail: '',
	loginPassword: '',
	registerEmail: '',
	registerPassword: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FIRSTNAME_CHANGED:
			return {
				...state,
				firstName: action.payload
			};
		case LASTNAME_CHANGED:
			return {
				...state,
				lastName: action.payload
			};
		case REG_EMAIL_CHANGED:
			return {
				...state,
				registerEmail: action.payload
			};
		case REG_PASSWORD_CHANGED:
			return {
				...state,
				registerPassword: action.payload
			};
		case LOGIN_EMAIL_CHANGED:
			return {
				...state,
				loginEmail: action.payload
			};
		case LOGIN_PASSWORD_CHANGED:
			return {
				...state,
				loginPassword: action.payload
			};
		case REGISTER_FORM:
			return {
				...state,
				action
			};
		case LOGIN_FORM:
			return {
				...state,
				action
			};
		case SIGN_OUT:
			return { ...state, action };
		default:
			return state;
	}
};
