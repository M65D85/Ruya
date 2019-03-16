import React, { Component } from 'react';
import { Accordion, Button, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
	updateProduct,
	removeCartItem
} from '../../Reduxables/Actions/Cart/CartItemActions';

class ItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			val: 0
		};
	}

	componentWillUpdate() {
		this.renderCartProducts();
	}

	updateProduct(event, data) {
		var qty = {
			cartItemID: data.cartItemID,
			cartID: data.cartID,
			productID: data.productID,
			quantity: data.value
		};
		console.log(data);
		if (data.value !== data.defaultValue) {
			this.props.updateProduct(qty).then(response => {
				window.location.reload();
			});
		}
	}

	removeCartItem(event, data) {
		console.log(data.cartItemID);
		var productData = {
			cartItemID: data.cartItemID
		};
		this.props.removeCartItem(productData).then(response => {
			window.location.reload();
		});
	}

	renderCartProducts() {
		const { cart, qty } = this.props;
		if (cart.length === 0) {
			return (
				<div>
					<h3>Cart is empty</h3>
				</div>
			);
		} else {
			return _.map(cart, index => {
				console.log(index.item_id);
				return (
					<div>
						<ul key={index}>
							<li>
								{index.item_id} {index.name}
							</li>
							<div>
								<Dropdown
									compact
									selection
									options={qty}
									productID={index.item_id}
									cartID={index.CartID}
									cartItemID={index.CartItemID}
									defaultValue={index.Quantity}
									onChange={this.updateProduct.bind(this)}
								/>
							</div>
							<Button
								cartItemID={index.CartItemID}
								onClick={this.removeCartItem.bind(this)}
							>
								Remove
							</Button>
						</ul>
					</div>
				);
			});
		}
	}

	render() {
		console.log(this.props.cart);
		const renderCartProducts = this.renderCartProducts();
		return (
			<div>
				<Accordion fluid>
					<Accordion.Title
						active={this.state.open}
						onClick={() => this.setState({ open: !this.state.open })}
					>
						{this.state.open === false ? 'See' : 'Hide'} Item Details
						{this.state.open === false ? ' +' : ' -'}
					</Accordion.Title>
					<Accordion.Content active={this.state.open}>
						<p>Something</p>
						{renderCartProducts}
					</Accordion.Content>
				</Accordion>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		cart: state.cart.cart,
		qty: state.cart.qty,
		total: state.cart.total
	};
};

export default connect(
	mapStateToProps,
	{ updateProduct, removeCartItem }
)(ItemDetails);
