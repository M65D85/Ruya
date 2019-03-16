import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import AuthenticationReducer from './Authentication/AuthenticationReducer';
import ModalReducer from './Authentication/ModalReducer';
import PromoCodeReducer from './PromoCode/PromoCodeReducer';
import DropDownReducer from './DropDown/DropDownReducer';
import SearchReducer from './Search/SearchReducer';
import CartReducer from './Cart/CartReducer';

export default combineReducers({
	modalRequest: ModalReducer,
	promoCode: PromoCodeReducer,
	dropDown: DropDownReducer,
	authenticationRequest: AuthenticationReducer,
	search: SearchReducer,
	session: sessionReducer,
	cart: CartReducer
});
