import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Routes from './Routes';
import {
	saveCart,
	getCartItems,
	totalAmount,
	calculateCartTotal
} from './Reduxables/Actions/Cart/CartItemActions';
import { validateSession } from './Reduxables/Actions/Authentication/AuthenticationActions';

class App extends Component {
	componentDidMount() {
		//this.validateToken();
	}

	getProducts() {
		axios.get('http://localhost:3306/products').then(response => {
			console.log('this is fired');
		});
	}

	getCat() {}

	validateToken() {
		const { user } = this.props;
		if (user.session === undefined) {
			console.log('No session');
		} else {
			var token = {
				token: this.props.user.session,
				customerId: this.props.user.user.id
			};
			this.props.validateSession(token).then(response => {
				console.log(response);
			});
		}
	}

	validateSession() {
		var sessionData = {
			session: this.props.user.session
		};
		this.props.validateSession(sessionData).then(response => {
			if (response.data.session === '') {
				console.log('no session');
				var cartData = {};
				this.props.saveCart(cartData);
			} else {
				var userData = {
					userID: this.props.user.userID
				};
				this.props.getCartItems(userData).then(response => {
					if (response.data === '') {
						console.log('no cart Items in database');
					} else {
						const cartData = response.data.cart;
						console.log(cartData);
						this.props.saveCart(cartData);
						var total = this.props.calculateCartTotal(cartData);
						this.props.totalAmount(total);
					}
				});
			}
			//this.props.saveCart(cartData);
		});
	}

	render() {
		console.log(this.props.user);
		console.log(this.props.cart);
		return <Routes />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.session.user,
		cart: state.cart.cart
	};
};

export default connect(
	mapStateToProps,
	{ saveCart, getCartItems, totalAmount, calculateCartTotal, validateSession }
)(App);
