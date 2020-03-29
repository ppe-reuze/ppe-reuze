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

    submissionMutation = async () => {
        const submissionDetails = {
            username: 'vishnu',
            description: 'Amplify CLI rocks!'
        };

        const newSubmission = await API.graphql(graphqlOperation(addSubmission, submissionDetails));
        alert(JSON.stringify(newSubmission));
    };


    render() {
        return (
            <div className="container">
                <h1 className="title">Add a new strategy</h1>
                <div className="field">
                    <label className="label has-text-white">Title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Title" />
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-white">Details</label>
                    <div className="control">
                        <input className="textarea" type="text" placeholder="Details" />
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" onclick={this.submissionMutation}>Submit</button>
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