import React, { Component } from 'react';

//import { Link } from '../../../routes';
import CartComponent from '../Cart/CartComponent';

class DropDownList extends Component {
	constructor(props) {
		super();
	}

	render() {
		const { women, men, kids, accessories, cart } = this.props;
		return (
			<div>
				{women ? (
					<div>
						<div>
							<a href="/Women/Shoes" className="item">
								Shoes
							</a>
						</div>
						<div>
							<a href="/Women/Tops" className="item">
								Tops
							</a>
						</div>
						<div>
							<a href="/Women/Dresses" className="item">
								Dresses
							</a>
						</div>
					</div>
				) : null}
				{men ? (
					<div>
						<a href="/Men/Shoes" className="item">
							Shoes
						</a>
					</div>
				) : null}
				{kids ? (
					<div>
						<a href="/Kids/Shoes" className="item">
							Shoes
						</a>
					</div>
				) : null}
				{accessories ? (
					<div>
						<a href="/Accessories/Womens_Watches" className="item">
							Womens Watches
						</a>
					</div>
				) : null}
				{cart ? (
					<div>
						<CartComponent dropDown={cart} />
					</div>
				) : null}
			</div>
		);
	}
}
export default DropDownList;
