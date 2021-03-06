import React, { Component } from 'react';

import { getOrderHistory } from './../services/customer'

export default class OrderHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			orders: []
		}
		this.beautifyDate = this.beautifyDate.bind(this);
	}

	componentDidMount() {
		getOrderHistory().then(
			response => {
				console.log('orders', response)
				this.setState({
					orders: response
				})

			}
		)
	}
	beautifyDate(date) {
		var shortDate = date.slice(0, 10).split('-');
		shortDate.push(shortDate.shift());
		var datey = shortDate.join(' ');
		return datey;
	}


	render() {

		var orderItem = this.state.orders.map((e, i) => {
			return (
				<div key={i} className='order'>
					<div className='order-details'><p>ORDER PLACED<br />{this.beautifyDate(e.order_date)}</p>




						<p>TOTAL<br />${e.total}</p>
						<p>STATUS<br />{e.status}</p>

					</div>
					<div className='order-bag'>
						{
							e.bag.map((e, i) => {
								//bag garment array is 0 category, 1 name, 2 price, 3 material, 4 default measurement, 5 measurements Object, 6 /END
								// e[5] = { Bust, Chest, Hip, Shoulder, Upper_Bust, Upper_Arm, Waist }
								var myForInLoop = [];
								for (var key in e[5]) {
									myForInLoop.push(<span key={key} className='measurements-lines'>{key + ' : ' + e[5][key]}</span>)
								}

								return (
									<div key={i} className='order-garment'>
										{/* <img className="gallery-images" src={e.image} alt={e.name} /> */}
										<p className='clothing-item-display'><img src={e[6]} alt={e[1]} /></p>
										<div className='clothing-item-order-50'>
											<div className='order-design-col'><p><strong>DESIGN</strong><br />{e[1]}</p>
												<p><strong>PRICE</strong><br />${e[2]}</p>
												<p><strong>MATERIAL</strong><br />{e[3]}</p>
											</div>
											<div>
												<p><strong>MEASUREMENTS</strong><br />
													{myForInLoop}</p>
											</div>
										</div>
									</div>

								)
							})
						}

					</div>
				</div>
			)
		})


		return (
			<div className="order-history">
				<div className='orders-container'>
					{orderItem}
				</div>
			</div>
		)
	}
}


// bag: [
// 	["Dresses", "Chelsea", 70, "Polka Dots", "no default measurement", { "Bust": "20", "Chest": "20", "Hip": "22", "Shoulder": "20", "Under_Bust": "21", "Upper_Arm": "20", "Waist": "25" }, "/END"],
// 	["Dresses", "Maxi", 75, "Corduroy Navy","no default measurement",{"Bust":"","Chest":"21","Hip":"","Shoulder":"","Under_Bust":"","Upper_Arm":"","Waist":""},"/ END"],
// "Tops", "Stretch Poplin Slim Fit Button-up Shirt", 40, "Warm Winter Red Fleece","no default measurement",{"Bust":"","Chest":"21","Hip":"","Shoulder":"","Under_Bust":"","Upper_Arm":"","Waist":""},"/ END"]
// 	]