import { PRODUCTS_DATA, PRODUCT_DATA } from '../../Actions/types';

const INITIAL_STATE = {
	products: {},
	singleProduct: {}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PRODUCTS_DATA:
			return { ...state, products: action.payload };
		case PRODUCT_DATA:
			return { ...state, singleProduct: action.payload };
		default:
			return state;
	}
};
