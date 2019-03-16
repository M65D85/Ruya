import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
//import { Button, Input, Form } from 'semantic-ui-react';
//import firebase from '../Components/Firebase';
import Layout from '../Components/Layout/Layout';

class App extends Component {
	componentDidMount() {
		/*
		axios.get('http://localhost:3306/noLogin').then(response => {
			console.log(response);
		});
		*/
	}

	render() {
		return (
			<BrowserRouter>
				<Layout>
					<p>Main</p>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default connect()(App);
