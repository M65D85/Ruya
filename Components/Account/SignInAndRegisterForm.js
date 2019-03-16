import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from '../DropDown/DropDown';
import {
	Form,
	Button,
	Modal,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from 'semantic-ui-react';

import {
	firstNameChanged,
	lastNameChanged,
	loginEmailChanged,
	loginPasswordChanged,
	registerEmailChanged,
	registerPasswordChanged,
	onSubmitRegisterForm,
	onSubmitLoginForm,
	onSubmitLogOut,
	triggerIsLoggedIn,
	authenticatedName
} from '../../Reduxables/Actions/Authentication/AuthenticationActions';

import {
	triggerSignIn,
	triggerRegister,
	triggerSignInFromReg,
	triggerRegFromSignIn,
	triggerOff
} from '../../Reduxables/Actions/Authentication/ModalActions';

import {
	authMouseOver,
	handleMouseOut
} from '../../Reduxables/Actions/DropDown/DropDownActions';

import { saveCart } from '../../Reduxables/Actions/Cart/CartItemActions';

class SignInAndRegisterForm extends Component {
	constructor(props) {
		super();
	}

	componentWillUpdate() {
		this.renderModal();
	}

	onSignInFromRegModal() {
		this.props.triggerSignInFromReg();
	}

	onRegOpenModal() {
		this.props.triggerRegister();
	}

	onRegFromSignInModal() {
		this.props.triggerRegFromSignIn();
	}

	onCloseModal() {
		this.props.triggerOff();
	}

	onfirstNameChange(text) {
		this.props.firstNameChanged(text);
	}

	onlastNameChange(text) {
		this.props.lastNameChanged(text);
	}

	onRegEmailChange(text) {
		this.props.registerEmailChanged(text);
	}

	onRegPasswordChange(text) {
		this.props.registerPasswordChanged(text);
	}

	onSignInEmailChange(text) {
		this.props.loginEmailChanged(text);
	}

	onSigInPasswordChange(text) {
		this.props.loginPasswordChanged(text);
	}

	authMouseOver() {
		this.props.authMouseOver();
	}

	handleMouseOut() {
		this.props.handleMouseOut();
	}

	onSubmitRegisterForm(event) {
		event.preventDefault();
		var data = {
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			registerPassword: this.props.regPassword,
			registerEmail: this.props.regEmail
		};
		this.props.onSubmitRegisterForm(data).then(
			response => {
				//const userName = response.data.userName;
				this.props.triggerIsLoggedIn();
				//this.props.authenticatedName(userName);
				this.props.triggerOff();
			},
			err => console.log(err)
		);
	}

	onSubmitLogInForm(event) {
		event.preventDefault();
		var data = {
			loginEmail: this.props.loginEmail,
			loginPassword: this.props.loginPassword
		};
		this.props.onSubmitLoginForm(data).then(
			response => {
				console.log(response);
				var userName = response.data.user.customer.firstname;
				var cartItems = response.data.user.items;
				console.log(userName);

				this.props.triggerOff();
				this.props.saveCart(cartItems);
				this.props.triggerIsLoggedIn();
				this.props.authenticatedName(userName);
			},
			err => console.log(err)
		);
	}

	onSignInOrSignOutOpenModal() {
		if (this.props.isAuthenticated && this.props.isLoggedIn) {
			/*
			var data = {
				session: this.props.user.session
			};
			*/
			this.props.onSubmitLogOut();
			this.props.triggerIsLoggedIn();
			const userName = '';
			this.props.authenticatedName(userName);
			window.location.reload();
		} else {
			this.props.triggerSignIn();
		}
	}

	renderModal() {
		if (this.props.triggered || this.props.triggeredSignInFromRegister) {
			return this.renderSignInForm();
		}

		if (
			this.props.triggeredRegister ||
			this.props.triggeredRegisterFromSignIn
		) {
			return this.renderRegForm();
		}
	}

	renderButtons() {
		if (this.props.isLoggedIn && this.props.isAuthenticated) {
			return (
				<div>
					<div
						onMouseOver={this.authMouseOver.bind(this)}
						onMouseOut={this.handleMouseOut.bind(this)}
					>
						<div>Welcome, {this.props.userName}</div>
					</div>
					<div>
						<DropDown
							onMouseOver={this.authMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
							triggerAuth={this.props.auth}
						>
							<div>
								<Button onClick={this.onSignInOrSignOutOpenModal.bind(this)}>
									Sign Out
								</Button>
							</div>
						</DropDown>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<Button onClick={this.onSignInOrSignOutOpenModal.bind(this)}>
						Sign In
					</Button>
					<Button onClick={this.onRegOpenModal.bind(this)}>Register</Button>
				</div>
			);
		}
	}

	renderSignInForm() {
		return (
			<div className="SignInForm animated bounceIn" vertical-align="middle">
				<Modal.Header />
				<Modal.Content>
					<Modal.Description>
						<div className="login-form" vertical-align="middle">
							<Grid textAlign="center" vertical-align="middle">
								<Grid.Column style={{ maxWidth: 450 }}>
									<Header as="h2" color="grey" textAlign="center">
										<Image /> Log-in to your account
									</Header>
									<Form
										size="large"
										onSubmit={this.onSubmitLogInForm.bind(this)}
										method="POST"
									>
										<Segment stacked>
											<Form.Input
												fluid
												icon="user"
												iconPosition="left"
												name="signInEmail"
												placeholder="E-mail address"
												type="email"
												value={this.props.loginEmail}
												onChange={this.onSignInEmailChange.bind(this)}
											/>
											<Form.Input
												fluid
												icon="lock"
												iconPosition="left"
												name="signInPassword"
												placeholder="Password"
												type="password"
												value={this.props.loginPassword}
												onChange={this.onSigInPasswordChange.bind(this)}
											/>

											<Button color="grey" fluid size="large">
												Login
											</Button>
										</Segment>
									</Form>
									<Message>
										New to us?{' '}
										<a onClick={this.onRegFromSignInModal.bind(this)}>
											Register
										</a>
									</Message>
								</Grid.Column>
							</Grid>
						</div>
					</Modal.Description>
				</Modal.Content>
			</div>
		);
	}

	renderRegForm() {
		return (
			<div className="RegisterForm animated bounceIn">
				<Modal.Header />
				<Modal.Content>
					<Modal.Description>
						<div className="login-form" vertical-align="middle">
							<Grid textAlign="center" vertical-align="middle">
								<Grid.Column style={{ maxWidth: 450 }}>
									<Header as="h2" color="grey" textAlign="center">
										<Image /> Create An Account
									</Header>
									<Form
										size="large"
										onSubmit={this.onSubmitRegisterForm.bind(this)}
										method="POST"
									>
										<Segment stacked>
											<Form.Input
												fluid
												icon="user"
												iconPosition="left"
												name="firstName"
												placeholder="First Name"
												value={this.props.firstName}
												onChange={this.onfirstNameChange.bind(this)}
											/>
											<Form.Input
												fluid
												icon="user"
												iconPosition="left"
												name="lastName"
												placeholder="Last Name"
												value={this.props.lastName}
												onChange={this.onlastNameChange.bind(this)}
											/>
											<Form.Input
												fluid
												icon="user"
												iconPosition="left"
												name="email"
												type="email"
												placeholder="E-mail address"
												value={this.props.regEmail}
												onChange={this.onRegEmailChange.bind(this)}
											/>
											<Form.Input
												fluid
												icon="lock"
												iconPosition="left"
												name="registerPassword"
												placeholder="Password"
												type="password"
												value={this.props.regPassword}
												onChange={this.onRegPasswordChange.bind(this)}
											/>

											<Button color="grey" fluid size="large">
												Login
											</Button>
										</Segment>
									</Form>
									<Message>
										Already a Customer?{' '}
										<a onClick={this.onSignInFromRegModal.bind(this)}>
											Sign In
										</a>
									</Message>
								</Grid.Column>
							</Grid>
						</div>
					</Modal.Description>
				</Modal.Content>
			</div>
		);
	}

	render() {
		console.log(this.props.isLoggedIn);
		console.log(this.props.isAuthenticated);
		console.log(this.props.userName);
		console.log(this.props.user.session);
		return (
			<div>
				{this.renderButtons()}
				<Modal
					style={{ height: 400 }}
					className="SignInAndRegisterForm animated fadeIn delay-0.5s"
					size="tiny"
					open={
						this.props.triggered ||
						this.props.triggeredSignInFromRegister ||
						this.props.triggeredRegister ||
						this.props.triggeredRegisterFromSignIn
					}
					onClose={this.onCloseModal.bind(this)}
				>
					{this.renderModal()}
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.session.user,
		auth: state.dropDown.auth,
		firstName: state.authenticationRequest.firstName,
		lastName: state.authenticationRequest.lastName,
		loginEmail: state.authenticationRequest.loginEmail,
		loginPassword: state.authenticationRequest.loginPassword,
		regEmail: state.authenticationRequest.registerEmail,
		regPassword: state.authenticationRequest.registerPassword,
		isLoggedIn: state.modalRequest.isLoggedIn,
		triggered: state.modalRequest.triggerSignIn,
		triggeredSignInFromRegister: state.modalRequest.triggerSignInFromRegister,
		triggeredRegister: state.modalRequest.triggerRegister,
		triggeredRegisterFromSignIn: state.modalRequest.triggerRegisterFromSignIn,
		userName: state.modalRequest.authenticatedName,
		isAuthenticated: state.session.authenticated
	};
};

export default connect(
	mapStateToProps,
	{
		firstNameChanged,
		lastNameChanged,
		loginEmailChanged,
		loginPasswordChanged,
		registerEmailChanged,
		registerPasswordChanged,
		onSubmitRegisterForm,
		onSubmitLoginForm,
		onSubmitLogOut,
		triggerSignIn,
		triggerRegister,
		triggerSignInFromReg,
		triggerRegFromSignIn,
		triggerOff,
		triggerIsLoggedIn,
		authenticatedName,
		authMouseOver,
		handleMouseOut,
		saveCart
	}
)(SignInAndRegisterForm);
