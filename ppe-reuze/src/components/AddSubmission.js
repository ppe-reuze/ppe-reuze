import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Link, withRouter } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';
import config from '../aws-exports';
Amplify.configure(config)

const addSubmission = `mutation createTodo($username:String! $title: String! $description: String! $equipment: String!) {
    createSubmission(input:{
      username:$username
      title:$title
      description:$description
      equipment:$equipment
    }){
      id
      username
      description
    }
  }`;


class AddSubmission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            type: ""
        }

        this.updateDescription = this.updateDescription.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    componentDidMount() {
        const { type } = this.props.location.state;
        this.setState({type: type});
    }
    
    submissionMutation = async () => {
        const submissionDetails = {
            username: 'demo',
            title: this.state.title,
            description: this.state.description,
            equipment: this.state.type
        };

        const newSubmission = await API.graphql(graphqlOperation(addSubmission, submissionDetails));
        console.log(newSubmission)
    };

    updateTitle(event){
        this.setState({ title: event.target.value });
    }

    updateDescription(event){
        this.setState({ description: event.target.value });
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
                        <input className="input has-text-black" type="text" value={this.state.title} onChange={this.updateTitle} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Equipment needed</label>
                    <div className="control">
                        <input className="input has-text-black" type="text" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Steps to perform</label>
                    <div className="control">
                        <input className="textarea has-text-black" type="text" value={this.state.description} onChange={this.updateDescription} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Source / Link to Evidence</label>
                    <div className="control">
                        <input className="input has-text-black" type="text" />
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

export default withAuthenticator(AddSubmission, {includeGreetings: false});