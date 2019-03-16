import axios from 'axios';

import { PRODUCTS_DATA, PRODUCT_DATA } from '../types';

export function getCategories() {
	return dispatch => {
		return axios
			.get('http://localhost:3306/categories')
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(err => {
				throw err;
			});
	};
}

export function getProductsList(productType) {
	return dispatch => {
		return axios
			.get('http://localhost:3306/products')
			.then(response => {
				return response.data.items;
			})
			.catch(err => {
				throw err;
			});
	};
}

export function getSingleProduct(ProductID) {
	return dispatch => {
		return axios
			.get(`http://localhost:3306/singleProduct/${ProductID}`)
			.then(response => {
				return response;
			})
			.catch(err => {
				throw err;
			});
	};
}

export function getItemListSql(productID) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/singleProduct', productID)
			.then(response => {
				console.log(response.data.data[0]);
				return response;
			})
			.catch(err => {
				throw err;
			});
	};
}

export const saveProducts = queryData => dispatch => {
	dispatch({
		type: PRODUCTS_DATA,
		payload: queryData
	});
};

export const saveSingleProduct = queryData => dispatch => {
	dispatch({
		type: PRODUCT_DATA,
		payload: queryData
	});
};
