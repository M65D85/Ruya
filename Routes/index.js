import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cart from '../Pages/Cart';
import Home from '../Pages';
import Product from '../Pages/Product';

import Women from '../Pages/Women';
import WomensTops from '../Pages/Women/Tops';
import WomensDresses from '../Pages/Women/Dresses';
import WomensShoes from '../Pages/Women/Shoes';

import Men from '../Pages/Men';
import MensShoes from '../Pages/Men/Shoes';

import Kids from '../Pages/Kids';
import KidsShoes from '../Pages/Kids/Shoes';

import Accessories from '../Pages/Accessories';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />

			<Route exact path="/Women" component={Women} />
			<Route exact path="/Women/Tops" component={WomensTops} />
			<Route exact path="/Women/Dresses" component={WomensDresses} />
			<Route exact path="/Women/Shoes" component={WomensShoes} />

			<Route exact path="/Men" component={Men} />
			<Route exact path="/Men/Shoes" component={MensShoes} />

			<Route exact path="/Kids" component={Kids} />
			<Route exact path="/Kids/Shoes" component={KidsShoes} />

			<Route exact path="/Accessories" component={Accessories} />

			<Route
				exact
				path="/Product/:productName-/:productID"
				component={Product}
			/>
			<Route exact path="/Cart" component={Cart} />
		</Switch>
	</BrowserRouter>
);
