import {
	HOVER_OUT,
	HOVER_MEN,
	HOVER_AUTH,
	HOVER_CART,
	HOVER_KIDS,
	HOVER_WOMEN,
	HOVER_ACCESSORIES
} from '../types';

export const menMouseOver = () => {
	return {
		type: HOVER_MEN
	};
};

export const kidsMouseOver = () => {
	return {
		type: HOVER_KIDS
	};
};

export const womenMouseOver = () => {
	return {
		type: HOVER_WOMEN
	};
};

export const accessoriesMouseOver = () => {
	return {
		type: HOVER_ACCESSORIES
	};
};

export const cartMouseOver = () => {
	return {
		type: HOVER_CART
	};
};

export const authMouseOver = () => {
	return {
		type: HOVER_AUTH
	};
};

export const handleMouseOut = () => {
	return {
		type: HOVER_OUT
	};
};
