import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Measurements extends Component {
	render() {
		return (
			<div id="measurements">
				<Header />
				<div className="page">
				<h1 className="title">Measurements</h1>
				</div>
				<Footer />
			</div>
		)
	}
}