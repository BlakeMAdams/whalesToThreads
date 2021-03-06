import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeGarment } from './../ducks/reducer';

import trashIcon from '../img/trashcan.png';

class Garment extends Component {
	
	// componentWillReceiveProps(nextProps){

	// 	this.props.addPriceToTotal(nextProps.garment[2])
	// 	console.log('/garment val=', nextProps.garment[2])
	// }
	checkMapMeasurements(garment) {

		// console.log('propsdefaultmeasurement', this.props.defaultMeasurement)
		if (garment[4] === 'no default measurement') {
			var measurements = garment[5];
			var measure = [];
			for (var key in measurements) {
				if (measurements[key]) {
					// console.log('checkmeasurements', key, measurements[key])
					measure.push(<p className='bag-measurements-list' key={key}>{key} : {measurements[key]}</p>)
				}
			}
			return measure;
		}
	}

	render() {
		

		return (
			<div className="bag-item-row">
				<div className="product-col">
					<div className='clothing-item-display'>
						<img className='clothing-item-display-img' src={this.props.garment[6]} alt={this.props.garment[1]} />
						<div className='clothing-item-details'>

							<h2>{this.props.garment[1]}</h2>
							<p>{this.props.garment[3]}</p>
							<h3>Measurements</h3>
							{this.checkMapMeasurements(this.props.garment)}
						</div>
					</div>
				</div>
				
				<div className="price-col">${this.props.garment[2]}</div>
				<div className="remove-col">
					{console.log('props.index', this.props.index)}
					<button onClick={() => { this.props.removeGarment(this.props.index) }}><img src={trashIcon} alt='Remove Item' /></button>
				</div>


			</div>
		)
	}
}

function mapStateToProps(state) {
	return { bag: state.bag }
}
let outputActions = {
	removeGarment
	
}
export default connect(mapStateToProps, outputActions)(Garment)