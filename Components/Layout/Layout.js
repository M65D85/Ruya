import React from 'react';
import { Container } from 'semantic-ui-react';

import Header from './Header/Header';

export default props => {
	return (
		<div>
			<Container>
				<Header />
				<div>{props.children}</div>
			</Container>
		</div>
	);
};
