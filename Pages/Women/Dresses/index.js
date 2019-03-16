import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../../Components/Layout/Layout';
import ProductTemplate from '../../../Components/ProductTemplate/ProductTemplate';

class WomenTopsIndex extends Component {
	state = {
		Women: []
	};

	render() {
		return (
			<Layout>
				<div>
					<p>Womens Dresses!</p>
					<ProductTemplate productType={'Dresses'} />
				</div>
			</Layout>
		);
	}
}

export default connect()(WomenTopsIndex);
