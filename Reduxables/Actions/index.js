import axios from 'axios';
import {
	PROMO_CODE,
	REG_EMAIL_CHANGED,
	REG_PASSWORD_CHANGED,
	FIRSTNAME_CHANGED,
	LASTNAME_CHANGED,
	REGISTER_FORM,
	TRIGGER_SIGNIN,
	TRIGGER_REGISTER,
	TRIGGER_SIGNINFROMREG,
	TRIGGER_REGFROMSIGNIN
} from './types';

//Function to give promotional discounts through Coupons
export const handlePromoCodeChange = code => dispatch => {
	dispatch({
		type: PROMO_CODE,
		payload: code.target.value
	});
};

//Register form firstName input
export const firstNameChanged = text => dispatch => {
	dispatch({
		type: FIRSTNAME_CHANGED,
		payload: text.target.value
	});
};

//Register form lastName input
export const lastNameChanged = text => dispatch => {
	dispatch({
		type: LASTNAME_CHANGED,
		payload: text.target.value
	});
};

//Register form email input
export const emailChanged = text => dispatch => {
	dispatch({
		type: REG_EMAIL_CHANGED,
		payload: text.target.value
	});
};

//Register form password input
export const passwordChanged = text => dispatch => {
	dispatch({
		type: REG_PASSWORD_CHANGED,
		payload: text.target.value
	});
};

//Register Form on Submit
export const onSubmitRegisterForm = data => dispatch => {
	dispatch({
		type: REGISTER_FORM,
		payload: axios
			.post('http://localhost:3306/Customers', data)
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				}
				return response.data;
			})
			.then(function(data) {
				console.log(data);
				if (data === 'success') {
					this.setState({ msg: 'Thanks for registering' });
					console.log(this.state.msg);
				}
			})
			.catch(function(err) {
				console.log(err);
			})
	});
};

export const triggerSignIn = () => {
	return {
		type: TRIGGER_SIGNIN
	};
};

export const triggerRegister = dispatch => {
	dispatch({
		type: TRIGGER_REGISTER
	});
};

export const triggerSignInFromReg = dispatch => {
	dispatch({
		type: TRIGGER_SIGNINFROMREG
	});
};

export const triggerRegFromSignIn = dispatch => {
	dispatch({
		type: TRIGGER_REGFROMSIGNIN
	});
};
