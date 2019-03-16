import {
	HOVER_OUT,
	HOVER_MEN,
	HOVER_AUTH,
	HOVER_CART,
	HOVER_KIDS,
	HOVER_WOMEN,
	HOVER_ACCESSORIES
} from '../../Actions/types';

const INITIAL_STATE = {
	women: false,
	men: false,
	kids: false,
	accessories: false,
	cart: false,
	auth: false,
	heading: 'Ruya',
	categories: {
		Women: 'Women',
		Men: 'Men',
		Kids: 'Kids',
		Accessories: 'Accessories'
	},
	subCategories: {
		Women: {
			Clothing: 'Clothing',
			Shoes: 'Shoes',
			Accessories: 'Accessories',
			Beauty: 'Beauty',
			Bags: 'Bags'
		},
		Men: {
			Clothing: 'Clothing',
			Shoes: 'Shoes',
			Accessories: 'Accessories',
			Grooming: 'Grooming',
			Bags: 'Bags'
		},
		Kids: {
			Boys: 'Boys',
			Girls: 'Girls'
		}
	}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case HOVER_OUT:
			return {
				...state,
				women: false,
				men: false,
				kids: false,
				accessories: false,
				cart: false,
				auth: false
			};
		case HOVER_MEN:
			return {
				...state,
				women: false,
				men: true,
				kids: false,
				accessories: false,
				cart: false,
				auth: false
			};
		case HOVER_CART:
			return {
				...state,
				women: false,
				men: false,
				kids: false,
				accessories: false,
				cart: true,
				auth: false
			};
		case HOVER_KIDS:
			return {
				...state,
				women: false,
				men: false,
				kids: true,
				accessories: false,
				cart: false,
				auth: false
			};
		case HOVER_WOMEN:
			return {
				...state,
				women: true,
				men: false,
				kids: false,
				accessories: false,
				cart: false,
				auth: false
			};
		case HOVER_ACCESSORIES:
			return {
				...state,
				women: false,
				men: false,
				kids: false,
				accessories: true,
				cart: false,
				auth: false
			};
		case HOVER_AUTH:
			return {
				...state,
				women: false,
				men: false,
				kids: false,
				accessories: false,
				cart: false,
				auth: true
			};
		default:
			return state;
	}
};
