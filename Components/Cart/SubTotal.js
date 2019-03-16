import React, { Component } from 'react';

class SubTotal extends Component {
	render() {
		return (
			<div>
				<p>SubTotal</p>
				{`LKR${this.props.price}`}
			</div>
		);
	}
}

export default SubTotal;
