import axios from 'axios';
import { sessionService } from 'redux-react-session';

import {
	AUTHENTICATED_NAME,
	FIRSTNAME_CHANGED,
	LASTNAME_CHANGED,
	REG_EMAIL_CHANGED,
	REG_PASSWORD_CHANGED,
	LOGIN_EMAIL_CHANGED,
	LOGIN_PASSWORD_CHANGED,
	IS_LOGGED_IN
} from '../types';

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
export const registerEmailChanged = text => dispatch => {
	dispatch({
		type: REG_EMAIL_CHANGED,
		payload: text.target.value
	});
};

//Register form password input
export const registerPasswordChanged = text => dispatch => {
	dispatch({
		type: REG_PASSWORD_CHANGED,
		payload: text.target.value
	});
};

//Login form email input
export const loginEmailChanged = text => dispatch => {
	dispatch({
		type: LOGIN_EMAIL_CHANGED,
		payload: text.target.value
	});
};

export const triggerIsLoggedIn = () => {
	return {
		type: IS_LOGGED_IN
	};
};

//Login form password input
export const loginPasswordChanged = text => dispatch => {
	dispatch({
		type: LOGIN_PASSWORD_CHANGED,
		payload: text.target.value
	});
};

export const authenticatedName = userName => dispatch => {
	dispatch({
		type: AUTHENTICATED_NAME,
		payload: userName
	});
};

export function onSubmitRegisterForm(data) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/registerCustomer', data)
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				} else {
					console.log(response);
				}
			})
			.catch(function(err) {
				console.log(err);
			});
	};
}

//Register Form on Submit
export function onSubmitRegisterFormMain(data) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/Customers', data)
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				} else {
					const session = response.data.session;
					const data = {
						session: response.data.session,
						userID: response.data.userID,
						userName: response.data.userName
					};
					console.log(data);
					sessionService.saveSession({ session });
					sessionService.saveUser(data);
					return response;
				}
			})
			.catch(function(err) {
				console.log(err);
			});
	};
}

export function onSubmitLoginForm(data) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/LoginMagento', data)
			.then(response => {
				console.log(response);

				const session = response.data.token;
				const data = {
					session: response.data.token,
					user: response.data.user.customer,
					userName: response.data.user.customer.firstname
				};
				console.log(data);
				sessionService.saveSession({ session });
				sessionService.saveUser(data);
				return response;
			})
			.catch(err => {
				throw err;
			});
	};
}

export function onSubmitLogOut() {
	return dispatch => {
		sessionService.deleteSession();
		sessionService.deleteUser();
	};
}

export function onSubmitLoginFormMain(data) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/Login', data)
			.then(response => {
				const session = response.data.session;
				const data = {
					session: response.data.session,
					userID: response.data.userID,
					userName: response.data.userName
				};
				sessionService.saveSession({ session });
				sessionService.saveUser(data);
				return response;
			})
			.catch(err => {
				throw err;
			});
	};
}

export function onSubmitLogOutMain(data) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/Logout', data)
			.then(response => {
				sessionService.deleteSession();
				sessionService.deleteUser();
				return response;
			})
			.catch(err => {
				throw err;
			});
	};
}

export function validateSession(token) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/tokenValid', token)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
				throw err;
			});
	};
}

export function validateSessionMain(session) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/Authenticate', session)
			.then(response => {
				if (response.data.session === '') {
					console.log(response.data);
					sessionService.deleteSession();
					sessionService.deleteUser();
					return response;
				} else {
					console.log(response.data);
					const session = response.data.session;
					sessionService.saveSession({ session });
					return response;
				}
			})
			.catch(err => {
				console.log(err);
				throw err;
			});
	};
}
