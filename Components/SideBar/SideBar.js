import React, { Component } from 'react';
// /import { slide as Menu } from 'react-burger-menu';

class SideBar extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div>
				<p>SideBar</p>
				<div>
					<h2>Showing results for: </h2>
					<div>
						<h3>{this.props.list}</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;
