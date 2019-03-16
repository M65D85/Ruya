import React from 'react';
import { Container } from 'semantic-ui-react';

export default props => {
	return (
		<div onMouseEnter={props.onMouseOver} onMouseLeave={props.onMouseOut}>
			{props.triggerWomen && (
				<Container
					className="DropDownContainer animated fadeIn"
					style={{ backgroundColor: 'grey' }}
				>
					<div>{props.children}</div>
				</Container>
			)}
			{props.triggerMen && (
				<Container
					className="DropDownContainer animated fadeIn"
					style={{ backgroundColor: 'black' }}
				>
					<div>{props.children}</div>
				</Container>
			)}
			{props.triggerKids && (
				<Container
					className="DropDownContainer animated fadeIn"
					style={{ backgroundColor: 'black' }}
				>
					<div>{props.children}</div>
				</Container>
			)}
			{props.triggerAccessories && (
				<Container
					className="DropDownContainer animated fadeIn"
					style={{ backgroundColor: 'black' }}
				>
					<div>{props.children}</div>
				</Container>
			)}
			{props.triggerCart && (
				<Container
					className="DropDownContainer animated fadeIn"
					style={{ backgroundColor: 'silver' }}
				>
					<div>{props.children}</div>
				</Container>
			)}
			{props.triggerAuth && (
				<Container
					className="DropDownContainer animated fadeIn"
					style={{ backgroundColor: 'silver' }}
				>
					<div>{props.children}</div>
				</Container>
			)}
		</div>
	);
};
