import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure(config)

const addSubmission = `mutation createTodo($username:String! $description: String!) {
    createSubmission(input:{
      username:$username
      description:$description
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
            description: ""
        }
    }

    submissionMutation = async () => {
        const submissionDetails = {
            username: 'vishnu',
            title: this.state.title,
            description: this.state.description
        };

        const newSubmission = await API.graphql(graphqlOperation(addSubmission, submissionDetails));
        alert(JSON.stringify(newSubmission));
    };

    submitForm = async (e) => {
        e.preventDefault();
        this.submissionMutation();
    };


    render() {
        return (
            <div className="container">
                <h1 className="title">Submit a new strategy</h1>
                <div className="field">
                    <label className="label has-text-white">Descriptive title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Title" />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-white">Equipment needed</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Title" />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-white">Steps to perform</label>
                    <div className="control">
                        <input className="textarea" type="text" placeholder="Details" />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-white">Source / Link to Evidence</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Title" />
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" onClick={this.submitForm}>Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default AddSubmission;