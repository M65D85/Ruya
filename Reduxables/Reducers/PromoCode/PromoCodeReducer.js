import { PROMO_CODE } from '../../Actions/types';

const initialState = {
	open: false,
	value: '',
	disablePromoButton: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PROMO_CODE:
			return {
				...state,
				value: action.payload
			};
		default:
			return state;
	}
}
