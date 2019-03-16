import React, { Component } from 'react';
//import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import {
	getProductsList,
	saveProducts,
	getCategories
} from '../../Reduxables/Actions/Search/SearchActions';

class ItemListComponent extends Component {
	componentDidMount() {
		this.getCategories();
		this.getProducts();
	}

	getProducts() {
		/*
		const productType = {
			ProductType: this.props.productType,
			CategoryName: this.props.category
		};

		this.props.getItemsList(productType).then(
			response => {
				const queryData = response.data;
				this.props.saveProducts(queryData);
			},
			err => console.log(err)
		);
		*/

		this.props.getProductsList().then(
			response => {
				console.log(response);
				var queryData = response;
				this.props.saveProducts(queryData);
			},
			err => console.log(err)
		);
	}

	addToCart(product) {}

	getCategories() {
		this.props.getCategories().then(
			response => {
				console.log(response);
			},
			err => console.log(err)
		);
	}

	renderProducts() {
		return _.map(this.props.products, product => {
			console.log(product.custom_attributes);
			const productName = product.name;
			const productID = product.id;
			return (
				<Link to={`/Product/${productName}-/${productID}`}>
					<a className="product">
						<div
							style={{
								float: 'left',
								position: 'relative',
								marginRight: 100
							}}
						>
							<ul key={product.id}>
								<li>{product.ProductSubType}</li>
								<li>{product.name}</li>
								<li>{product.Description}</li>
								<li>{product.price}</li>
							</ul>
						</div>
					</a>
				</Link>
			);
		});
	}

	render() {
		console.log(this.props.products);
		return (
			<div>
				<p>List Component</p>
				{this.renderProducts()}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		products: state.search.products
	};
};

export default connect(
	mapStateToProps,
	{ getProductsList, saveProducts, getCategories }
)(ItemListComponent);
