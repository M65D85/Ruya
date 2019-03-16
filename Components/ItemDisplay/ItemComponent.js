import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import {
	saveCart,
	addToCart,
	getCartItems,
	triggerExists,
	checkCart,
	calculateCartTotal,
	totalAmount
} from '../../Reduxables/Actions/Cart/CartItemActions';

class ItemComponent extends Component {
	state = {
		productID: null,
		price: null
	};

	renderProduct() {
		const { product } = this.props;
		return (
			<div>
				<div>
					<h3>ProductID: {product.ProductID}</h3>
					<h3>Brand: {product.Name}</h3>
					<h3>Description: {product.Description}</h3>
					<h3>Color: {product.Color}</h3>
					<h3>Category: {product.CategoryName}</h3>
					<h3>Price: {product.Price}</h3>
				</div>
			</div>
		);
	}

	addToCart() {
		const { user, cart, product } = this.props;
		var productData = {
			userID: user.userID,
			productID: product.ProductID,
			description: product.Description,
			quantity: 1,
			price: product.Price
		};
		if (user.userID === undefined) {
			console.log('no cart ID');
		} else {
			this.props.checkCart(cart, product, productData);
			this.props.getCartItems(productData).then(response => {
				if (response.data === '') {
					console.log('no cart Items in database');
				} else {
					const cartData = response.data.cart;
					console.log(cartData);
					this.props.saveCart(cartData);
					var total = this.props.calculateCartTotal(cartData);
					this.props.totalAmount(total);
					//window.location.reload();
				}
			});
		}
	}

	render() {
		console.log(this.props.cart);
		return (
			<div>
				<h1>Single Item</h1>
				{this.renderProduct()}
				<div>
					<Button onClick={this.addToCart.bind(this)}>Add to Cart</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		product: state.search.singleProduct,
		user: state.session.user,
		cart: state.cart.cart
	};
};

export default connect(
	mapStateToProps,
	{
		saveCart,
		addToCart,
		getCartItems,
		triggerExists,
		checkCart,
		calculateCartTotal,
		totalAmount
	}
)(ItemComponent);
