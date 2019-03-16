import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Button } from 'semantic-ui-react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { handlePromoCodeChange } from '../../Reduxables/Actions';

class PromoCodeDiscount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	handleChange = code => {
		this.props.handlePromoCodeChange(code);
	};

	render() {
		return (
			<div>
				<Accordion fluid>
					<Accordion.Title
						active={this.state.open}
						onClick={() => this.setState({ open: !this.state.open })}
					>
						{this.state.open === false ? 'Apply' : 'Hide'} Promo Code
						{this.state.open === false ? ' +' : ' -'}
					</Accordion.Title>
					<Accordion.Content active={this.state.open}>
						<Form>
							<FormGroup>
								<ControlLabel>Promo Code</ControlLabel>
								<FormControl
									type="text"
									placeholder="Enter Code"
									value={this.props.promoCode}
									onChange={this.handleChange}
								/>
							</FormGroup>
							<Button
								basic
								color="green"
								disabled={this.props.isDisabled}
								onClick={this.props.giveDiscount}
							>
								Apply
							</Button>
						</Form>
					</Accordion.Content>
				</Accordion>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { promoCode: state.promoCode.value };
};

export default connect(
	mapStateToProps,
	{ handlePromoCodeChange }
)(PromoCodeDiscount);
