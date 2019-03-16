import React, { Component } from 'react';

import ItemListComponent from '../ItemDisplay/ItemListComponent';
import SideBar from '../SideBar/SideBar';

class ProductTemplate extends Component {
	constructor(props) {
		super();
	}

	filterType() {
		const { category, productType } = this.props;
		if (category !== undefined) {
			return category;
		} else {
			return productType;
		}
	}

	render() {
		return (
			<div>
				<div>
					<SideBar list={this.filterType()} />
				</div>
				<div>
					<ItemListComponent
						category={this.props.category}
						productType={this.props.productType}
					/>
				</div>
			</div>
		);
	}
}

export default ProductTemplate;
