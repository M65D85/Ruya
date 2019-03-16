import React, { Component } from 'react';
//import { sessionService } from 'redux-react-session';

import Layout from '../../Components/Layout/Layout';

class MensIndex extends Component {
	state = {
		data: ''
	};

	componentDidMount() {}

	render() {
		return (
			<Layout>
				<div>
					<p> Mens Index </p>
				</div>
			</Layout>
		);
	}
}

export default MensIndex;
