import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';
import config from '../aws-exports';
import UserContext from './UserContext';
Amplify.configure(config)

const addSubmission = `mutation createSubmission($username:String! $title: String! $description: String! $equipment: String! $supplies: String $source: String) {
    createSubmission(input:{
      username:$username
      title:$title
      description:$description
      equipment:$equipment
      supplies:$supplies
      source:$source
    }){
      id
    }
  }`;


class Submit extends Component {
	static contextType = UserContext;

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			type: "",
			supplies: "",
			source: ""
		}

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		if (this.props.location.state) {
			const { type } = this.props.location.state;
			this.setState({ type: type });
		} else {
			this.props.history.push('/start');
		}
	}

	submissionMutation = async () => {
		const { user } = this.context;

		const submissionDetails = {
			username: user.username,
			title: this.state.title,
			description: this.state.description,
			equipment: this.state.type,
			supplies: this.state.supplies,
			source: this.state.source
		};

		await API.graphql(graphqlOperation(addSubmission, submissionDetails));
	};

	handleChange(event) {
		const value = event.target.value;
		this.setState({
			...this.state,
			[event.target.name]: value
		});
	}

	submitForm = async (e) => {
		e.preventDefault();
		this.submissionMutation();
		this.props.history.push('/submissions/' + this.state.type)
	};

	title(type) {
		switch (type) {
			case "n95":
				return "N95 Respirators";
			case "surgical":
				return "Surgical Masks";
			case "latex":
				return "Latex Gloves";
			case "nitrile":
				return "Nitrile Gloves";
			case "gowns":
				return "Gowns";
			default:
				return ""
		}
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">Submit a new strategy</h1>
				<h1 className="subtitle">{this.title(this.state.type)}</h1>
				<div className="field">
					<label className="label">Descriptive title</label>
					<div className="control">
						<input className="input has-text-black" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
					</div>
				</div>

				<div className="field">
					<label className="label">Supplies needed</label>
					<div className="control">
						<input className="input has-text-black" type="text" name="supplies" value={this.state.supplies} onChange={this.handleChange} />
					</div>
				</div>

				<div className="field">
					<label className="label">Description of process &amp; steps to perform</label>
					<div className="control">
						<input className="textarea has-text-black" type="text" name="description" value={this.state.description} onChange={this.handleChange} />
					</div>
				</div>

				<div className="field">
					<label className="label">Source or link to evidence</label>
					<div className="control">
						<input className="input has-text-black" type="text" name="source" value={this.state.source} onChange={this.handleChange} />
					</div>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<Link to={{
							pathname: '/submissions/' + this.state.type,
							state: {
								type: this.props.match.params.type
							}
						}}>
							<button class="button is-link" onClick={this.submitForm}>Submit</button>
						</Link>
					</div>
					<div class="control">
						<Link to={{
							pathname: '/submissions/' + this.state.type,
							state: {
								type: this.props.match.params.type
							}
						}}>
							<button class="button is-link is-light">Cancel</button>
						</Link>
					</div>
				</div>

			</div>
		)
	}
}

export default withAuthenticator(Submit, { includeGreetings: false });