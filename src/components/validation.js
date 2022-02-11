import React from "react";
import { Link } from "react-router-dom";
export default class Validation extends React.Component {
	constructor() {
		super();
		this.state = {
			input: {},
			errors: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

		if (this.validate()) {
			let input = {};
			input["email"] = "";
			input["address"] = "";
			input["creditcard"] = "";
			this.setState({ input: input });
			alert("Submited");
		}
	}

	validate() {
		let input = this.state.input;
		let errors = {};
		let isValid = true;

		if (!input["email"]) {
			isValid = false;
			errors["email"] = "Please enter your email address.";
		}

		if (typeof input["email"] !== "undefined") {
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(input["email"])) {
				isValid = false;
				errors["email"] = "Please enter a valid email address.";
			}
		}

		if (!input["address"]) {
			isValid = false;
			errors["address"] = "Please enter your address.";
		}

		if (!input["creditcard"]) {
			isValid = false;
			errors["creditcard"] = "Please enter your creditcard.";
		}

		this.setState({
			errors: errors,
		});

		return isValid;
	}
	render() {
		return (
			<div>
				<Link to="/cart">Back</Link>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label for="email">Email: </label>
						<input
							type="email"
							name="email"
							value={this.state.input.email}
							onChange={this.handleChange}
							id="email"
						/>
						<p>{this.state.errors.email}</p>
					</div>

					<div>
						<label for="address">Address: </label>
						<input
							type="text"
							name="address"
							value={this.state.input.address}
							onChange={this.handleChange}
							id="address"
						/>
						<p>{this.state.errors.address}</p>
					</div>

					<div>
						<label for="creditcard">Credit Card: </label>
						<input
							type="number"
							name="creditcard"
							value={this.state.input.creditcard}
							onChange={this.handleChange}
							id="creditcard"
						/>
						<p>{this.state.errors.creditcard}</p>
					</div>

					<button type="submit">Proceed to checkpoint</button>
				</form>
			</div>
		);
	}
}
