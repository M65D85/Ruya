import React, { Component } from 'react';
import Layout from '../../../Components/Layout/Layout';
import ProductTemplate from '../../../Components/ProductTemplate/ProductTemplate';
//import Database from '.../../../Database';

class WomenShoesIndex extends Component {
	componentWillMount() {
		//axios
		//.get('https://rallycoding.herokuapp.com/api/music_albums')
		//.then(response => this.setState({ albums: response.data }));
	}

	render() {
		return (
			<Layout>
				<div>
					<p>Womens Shoes!</p>
					<ProductTemplate productType={'Shoes'} />
				</div>
			</Layout>
		);
	}
}

export default WomenShoesIndex;
