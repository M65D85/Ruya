import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../Components/Layout/Layout';
import ItemComponent from '../../Components/ItemDisplay/ItemComponent';
import {
	getItemListSql,
	getSingleProduct,
	saveSingleProduct
} from '../../Reduxables/Actions/Search/SearchActions';

class Product extends Component {
	componentDidMount() {
		this.getProduct();
	}

	getProduct() {
		var ProductID = this.props.match.params.productID;
		console.log(ProductID);
		this.props.getSingleProduct(ProductID).then(
			response => {
				//const queryData = response.data.data[0];
				console.log(response);
				//this.props.saveSingleProduct(queryData);
			},
			err => console.log(err)
		);
	}

	render() {
		return (
			<Layout>
				<div>
					<ItemComponent />
				</div>
			</Layout>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

export default connect(
	mapStateToProps,
	{ getItemListSql, getSingleProduct, saveSingleProduct }
)(Product);
