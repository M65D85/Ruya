import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { sessionService } from 'redux-react-session';
//import axios from 'axios';
import store, { persistor } from './Reduxables/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
const validateSession = session => {
	// check if your session is still valid with a server check, through axios for instance
	console.log(session.session);
	axios
		.post('http://localhost:3306/Authenticate', session)
		.then(response => {
			if (response === false) {
				console.log('false is fired');
				return false;
			} else {
				console.log('true is fired');
				return true;
			}
		})
		.catch(err => {
			console.log(err);
			throw err;
		});
};
//console.log(validateSession);

const options = {
	refreshOnCheckAuth: true,
	driver: 'COOKIES',
	validateSession
};
*/

sessionService.initSessionService(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
