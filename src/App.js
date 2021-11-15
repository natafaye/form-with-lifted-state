import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent';
import FormComponent from './FormComponent';

export default class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			someData: null
		}
	}

	updateSomeData = (newSomeDataValue) => {
		this.setState({ someData: newSomeDataValue });
	}
	
	render() {
		return (
			<div>
				<FormComponent onSubmit={ this.updateSomeData } />
				<DisplayComponent somePropName={ this.state.someData } />
			</div>
		)
	}
}
