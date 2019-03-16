import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import { autoRehydrate } from 'redux-persist';
import { persistStore, persistReducer } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import rootReducer from './Reducers';

const persistConfig = {
	key: 'root',
	storage: storage,
	transforms: [createWhitelistFilter('cart', ['cart'])],
	whitelist: ['session', 'modalRequest', 'cart'], // only these will be persisted
	stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

const store = createStore(
	persistedReducer,
	initialState,
	compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export default store;
export { persistor };
