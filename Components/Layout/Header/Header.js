import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import DropDown from '../../DropDown/DropDown';
import DropownList from '../../DropDown/DropDownList';
import SignInAndRegisterForm from '../../Account/SignInAndRegisterForm';
//import { Link } from '../../../routes';
import {
	menMouseOver,
	kidsMouseOver,
	cartMouseOver,
	womenMouseOver,
	accessoriesMouseOver,
	handleMouseOut
} from '../../../Reduxables/Actions/DropDown/DropDownActions';

class Header extends Component {
	constructor(props) {
		super();
	}

	womenMouseOver() {
		this.props.womenMouseOver();
	}

	accessoriesMouseOver() {
		this.props.accessoriesMouseOver();
	}

	menMouseOver() {
		this.props.menMouseOver();
	}

	kidsMouseOver() {
		this.props.kidsMouseOver();
	}

	cartMouseOver() {
		this.props.cartMouseOver();
	}

	handleMouseOut() {
		this.props.handleMouseOut();
	}

	render() {
		return (
			<div className="parentHeader">
				<div className="NavHeader">
					<Menu>
						<div>
							<a href="/" className="item">
								Clothing
							</a>
						</div>
						<div
							onMouseOver={this.womenMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
						>
							<a href="/Women" className="item">
								Women
							</a>
						</div>
						<div
							onMouseOver={this.menMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
						>
							<a href="/Men" className="item">
								Men
							</a>
						</div>
						<div
							onMouseOver={this.kidsMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
						>
							<a href="/Kids" className="item">
								Kids
							</a>
						</div>
						<div
							onMouseOver={this.accessoriesMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
						>
							<a href="/Accessories" className="item">
								Accessories
							</a>
						</div>
						<div>
							<SignInAndRegisterForm />
						</div>
						<div
							onMouseOver={this.cartMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
						>
							<a href="/Cart" className="item">
								Cart
							</a>
						</div>
					</Menu>
				</div>
				<div className="DropwDownContainer">
					<div>
						<DropDown
							onMouseOver={this.womenMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
							triggerWomen={this.props.women}
						>
							<DropownList women={this.props.women} />
						</DropDown>
					</div>
					<div>
						<DropDown
							onMouseOver={this.menMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
							triggerMen={this.props.men}
						>
							<DropownList men={this.props.men} />
						</DropDown>
					</div>
					<div>
						<DropDown
							onMouseOver={this.kidsMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
							triggerKids={this.props.kids}
						>
							<DropownList kids={this.props.kids} />
						</DropDown>
					</div>
					<div>
						<DropDown
							onMouseOver={this.accessoriesMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
							triggerAccessories={this.props.accessories}
						>
							<DropownList accessories={this.props.accessories} />
						</DropDown>
					</div>
					<div>
						<DropDown
							onMouseOver={this.cartMouseOver.bind(this)}
							onMouseOut={this.handleMouseOut.bind(this)}
							triggerCart={this.props.cart}
						>
							<DropownList cart={this.props.cart} />
						</DropDown>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		men: state.dropDown.men,
		cart: state.dropDown.cart,
		kids: state.dropDown.kids,
		women: state.dropDown.women,
		accessories: state.dropDown.accessories
	};
};

export default connect(
	mapStateToProps,
	{
		menMouseOver,
		kidsMouseOver,
		cartMouseOver,
		womenMouseOver,
		accessoriesMouseOver,
		handleMouseOut
	}
)(Header);
