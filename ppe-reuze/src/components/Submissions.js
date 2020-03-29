import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure(config)

const listSubmissions = `query listTodos {
    listSubmissions{
      items{
        id
        username
        description
      }
    }
  }`;

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


class Submissions extends React.Component {

    submissionMutation = async () => {
        const submissionDetails = {
            username: 'vishnu',
            description: 'Amplify CLI rocks!'
        };

        const newSubmission = await API.graphql(graphqlOperation(addSubmission, submissionDetails));
        alert(JSON.stringify(newSubmission));
    };

    listQuery = async () => {
        console.log('listing submission');
        const allSubmissions = await API.graphql(graphqlOperation(listSubmissions));
        alert(JSON.stringify(allSubmissions));
    };

    title(type){
        switch(type){
            case "n95":
                return "Masks - N95 Respirator";
            case "surgical":
                return "Masks - Surgical";
            case "latex":
                return "Gloves - Latex";
            case "nitrile":
                return "Gloves - Nitrile";
            default:
                return ""
        }
    }

    render() {

        return (
            <div className="container">

                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column">
                    <div className="title">{this.title(this.props.match.params.type)}</div>
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4 has-text-black">John Smith</p>
                                        <p className="subtitle is-6 has-text-black">@johnsmith</p>
                                    </div>
                                </div>

                                <div className="content">
                                    <button onClick={this.listQuery}>GraphQL Query</button>
                                    <button onClick={this.submissionMutation}>GraphQL Mutation</button>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br />
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-quarter"></div>
                </div>
            </div>
        )
    }
}

export default Submissions;