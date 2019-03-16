import React, { Component } from 'react';

import Layout from '../../Components/Layout/Layout';
import ProductTemplate from '../../Components/ProductTemplate/ProductTemplate';

class WomensIndex extends Component {
	render() {
		return (
			<Layout>
				<div>
					<p> Womens Index </p>
					<ProductTemplate category={'Women'} />
				</div>
			</Layout>
		);
	}
}

export default WomensIndex;
