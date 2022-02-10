import React from "react";

export default class Validation extends React.Component {
	constructor() {
		super();
		this.state = {
			input: {},
			errors: {},
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let input = this.state.input;
		input[event.target.name] = event.target.value;

		this.setState({
			input,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	validate() {
		let input = this.state.input;
		let errors = {};
		let isValid = true;
	}
	render() {
		return <div></div>;
	}
}
