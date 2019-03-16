import axios from 'axios';
import _ from 'lodash';

import { CART_DATA, CART_TOTAL, PRODUCT_EXISTS } from '../types';

export const saveCart = queryData => dispatch => {
	dispatch({
		type: CART_DATA,
		payload: queryData
	});
};

export const triggerExists = () => {
	return {
		type: PRODUCT_EXISTS
	};
};

export const totalAmount = queryData => dispatch => {
	dispatch({
		type: CART_TOTAL,
		payload: queryData
	});
};

export function calculateCartTotal(data) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/calculateCartTotal', data)
			.then(response => {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				} else {
					console.log(response);
					return response;
				}
			});
	};
}

export function calculateCartTotalMain(cartData) {
	return dispatch => {
		var total = 0;
		console.log(cartData);
		_.map(cartData, index => {
			total += index.Price * index.Quantity;
		});
		return total;
	};
}

export function checkCart(cartData, product, productData) {
	return dispatch => {
		var exists = false;
		_.map(cartData, index => {
			const productID = index.ProductID;
			if (product.ProductID === productID) {
				console.log('Item exists');
				console.log(exists);
				exists = true;
				console.log(exists);
			}
		});
		if (!exists) {
			this.addToCart(productData);
			window.location.reload();
		}
	};
}

export function getCartItems(data) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/getCartItems', data)
			.then(response => {
				console.log(response);
				return response;
			});
	};
}

export function updateProduct(qty) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/updateProduct', qty)
			.then(response => {
				console.log(response);
				return response;
			});
	};
}

export function addToCart(productData) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/addToCart', productData)
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error('Bad response from server');
				} else {
					console.log(response);
					return response;
				}
			})
			.catch(function(err) {
				console.log(err);
			});
	};
}

export function removeCartItem(productData) {
	return dispatch => {
		return axios
			.post('http://localhost:3306/removeCartItem', productData)
			.then(function(response) {
				console.log(response);
				return response;
			});
	};
}
