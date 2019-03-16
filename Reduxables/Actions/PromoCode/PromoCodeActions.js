import { PROMO_CODE } from '../types';

//Function to give promotional discounts through Coupons
export const handlePromoCodeChange = code => dispatch => {
	dispatch({
		type: PROMO_CODE,
		payload: code.target.value
	});
};
