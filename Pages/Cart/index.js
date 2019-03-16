import React, { Component } from 'react';

import Layout from '../../Components/Layout/Layout';
import CartComponent from '../../Components/Cart/CartComponent';

class CartIndex extends Component {
	render() {
		return (
			<Layout>
				<div>
					<p> Cart Index </p>
					<CartComponent />
				</div>
			</Layout>
		);
	}
}

export default CartIndex;
