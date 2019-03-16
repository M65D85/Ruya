import React, { Component } from 'react';
import { Dimmer, Segment, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SubTotal from './SubTotal';
import ItemDetails from './ItemDetails';
import PromoCodeDiscount from './PromoCodeDiscount';
import { handlePromoCodeChange } from '../../Reduxables/Actions';
import {
	calculateCartTotal,
	totalAmount
} from '../../Reduxables/Actions/Cart/CartItemActions';

class CartComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 200,
			estimatedTotal: 0,
			disablePromoButton: false
		};
	}

	componentDidMount() {
		this.cartTotal();
		this.setState({ estimatedTotal: this.state.total });
	}

	cartTotal() {
		if (this.props.user !== undefined) {
			var data = {
				user: this.props.user
			};
			this.props.calculateCartTotal(data).then(response => {
				console.log(response.data.subtotal);
				this.props.totalAmount(response.data.subtotal);
			});
		}
	}

	giveDiscountHandler = () => {
		if (this.props.applied) {
			this.setState(
				{ estimatedTotal: this.state.estimatedTotal * 0.9 },
				function() {
					this.setState({ disablePromoButton: true });
				}
			);
		}
	};

	render() {
		console.log(this.props.user);
		return (
			<Segment>
				<Dimmer active={false}>
					<Loader size="massive">Loading</Loader>
				</Dimmer>

				<div>
					{this.props.dropDown ? (
						<div>
							<p>DropDown Cart Component</p>
							<SubTotal price={this.props.total.toFixed(2)} />
							<ItemDetails />
							<PromoCodeDiscount
								giveDiscount={this.giveDiscountHandler.bind(this)}
								isDisabled={this.state.disablePromoButton}
							/>
						</div>
					) : (
						<div>
							<p>Main Cart Component</p>
							<SubTotal price={this.props.total.toFixed(2)} />
							<ItemDetails />
							<PromoCodeDiscount
								giveDiscount={this.giveDiscountHandler.bind(this)}
								isDisabled={this.state.disablePromoButton}
							/>
						</div>
					)}
				</div>
			</Segment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const applied = state.promoCode.value === 'DISCOUNT';
	return {
		applied,
		user: state.session.user,
		total: state.cart.total
	};
};

export default connect(
	mapStateToProps,
	{ handlePromoCodeChange, calculateCartTotal, totalAmount }
)(CartComponent);
